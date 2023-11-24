'use client'
import { ICommentCreate } from "@/contexts/@commentTypes"
import { UserNameTag } from "../UserNameTag"
import { commentStore } from "@/contexts/commentStore"
import { userStore } from "@/contexts/userStore";
import { productStore } from "@/contexts/productStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentSchema } from "./schema";


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
      <dialog open={commentaryModal[0] as boolean} role="dialog" aria-modal="true">
        <form
          onSubmit={handleSubmit((formData) => handleCommentaryClick(formData))}
        >
          <div>
            <UserNameTag />
            <button type="button"
              onClick={() => commentaryModalToggle(false, "post")}
            >
              FECHAR
            </button>
          </div>
          {
            commentaryModal[1] === "delete" ?
              <h1>Tem Certeza que que quer deletar seu comentário?</h1> :

              <div>
                <textarea
                  placeholder={comment?.content || "Digite seu Comentário"}
                  id="commentary-post" cols={30} rows={10}
                  {...register("content")}>

                </textarea>
                {errors.content && <p>{errors.content.message}</p>}
                <div>
                  {Array.from({ length: 10 }, (_, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        {...register("rating")}
                        value={index + 1}
                      />
                      {index + 1}
                    </label>
                  ))}
                  {errors.rating && <p>{errors.rating.message}</p>}
                </div>
              </div>
          }
          <button type="submit">{submitButtonText()}</button>
        </form>
      </dialog>
    </div>
  )
}