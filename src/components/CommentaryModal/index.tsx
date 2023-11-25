'use client'
import { ICommentCreate } from "@/contexts/@commentTypes"
import { UserNameTag } from "../UserNameTag"
import { commentStore } from "@/contexts/commentStore"
import { userStore } from "@/contexts/userStore";
import { productStore } from "@/contexts/productStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentSchema } from "./schema";
import { ephesis } from "@/app/fonts";


export const CommentaryModal = () => {
  const { loadUser, userData } = userStore((state) => state);
  const { loadProducts, productList, activeProduct } = productStore((state) => state)
  const {
    commentaryModal,
    commentaryModalToggle,
    addComment,
    editComment,
    removeComment
  } = commentStore((state) => state);
  const comment = commentStore((state) => state.activeComment)

  const submitButtonText = (): string => {
    switch (commentaryModal[1]) {
      case "delete":
        return "REMOVER";
      case "edit":
        return "EDITAR";
      default:
        return "POSTAR";
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICommentCreate>({
    resolver: zodResolver(commentSchema),
  });

  const handleCommentaryClick = async (formData: ICommentCreate): Promise<void> => {
    switch (commentaryModal[1]) {
      case "delete":
        await removeComment({
          commentId: Number(comment?.id),
          token: String(userData?.accessToken)
        })
        break;

      case "edit":
        await editComment({
          comment: formData,
          token: String(userData?.accessToken),
          commentId: Number(comment?.id)
        })
        break;

      default:
        await addComment({
          comment: formData,
          token: String(userData?.accessToken),
          productId: Number(activeProduct?.id)
        })
        break;
    }

    await loadUser();
    await loadProducts();
    commentaryModalToggle(false, "post")
  }

  return (
    <div>
      <dialog
        role="dialog" aria-modal="true"
        open={commentaryModal[0] as boolean}
        className="fixed inset-0 w-full h-full bg-white/30">
        <div className="right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-luxo w-[600px]">
          <form
            onSubmit={handleSubmit((formData) => handleCommentaryClick(formData))}
            className="border-4 border-red-900/80 w-full h-full p-6 relative">
            <div>
              <UserNameTag />
              <button type="button"
                onClick={() => commentaryModalToggle(false, "post")}
                className="absolute top-0 right-0 text-lg p-4">
                X
              </button>
            </div>
            {
              commentaryModal[1] === "delete" ?
                <div className="m-h-[180px] flex items-center justify-center">
                  <h1>Tem Certeza que que quer deletar seu comentário?</h1>
                </div>
                :
                <div>
                  <textarea
                    placeholder={comment?.content || "Digite seu Comentário"}
                    id="commentary-post" cols={30} rows={10}
                    {...register("content")}
                    className="w-full rounded-xl p-5 border-4 border-red-900/80 ">

                  </textarea>
                  {errors.content && <p className="p-1 text-xs">{errors.content.message}</p>}
                  <div>Avaliação:</div>
                  <div className="flex justify-around bg-black/30 py-2 rounded-xl">
                    {Array.from({ length: 10 }, (_, index) => (
                      <label key={index}
                        className={ephesis.className}>
                        <input
                          type="radio"
                          {...register("rating")}
                          value={index + 1}
                        />
                        {index + 1}
                      </label>
                    ))}
                  </div>
                  {errors.rating && <p className="p-1 text-xs">{errors.rating.message}</p>}
                </div>
            }
            <div>
              <button type="submit" 
              className="flex gap-3 items-center bg-black rounded-full w-fit px-3 py-1 mx-auto mt-2 shadow-sm shadow-gray-400 hover:shadow-sm hover:shadow-gray-300 hover:scale-110 ease-in-out duration-300">
                  <span className="text-sm">{submitButtonText()}</span>
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}