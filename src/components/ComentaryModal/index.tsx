'use client'
import { IComment, ICommentCreate } from "@/contexts/@commentTypes"
import { UserNameTag } from "../UserNameTag"
import { commentStore } from "@/contexts/commentStore"
import { userStore } from "@/contexts/userStore";
import { productStore } from "@/contexts/productStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentSchema } from "./schema";


export const ComentaryModal = ({ comment }: { comment?: IComment }) => {
  const { loadUser, userData } = userStore((state) => state);
  const { loadProducts, productList } = productStore((state) => state)
  const {
    commentaryModal,
    commentaryModalToggle,
    addComment,
    editComment,
    removeComment
  } = commentStore((state) => state);

  const submitButtonText = () => {
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

  const handleComentaryClick = async (formData: ICommentCreate) => {
    switch (commentaryModal[1]) {
      case "delete":
        await removeComment({
          commentId: Number(comment?.id),
          token: String(userData?.accessToken)
        })
      case "edit":
        await editComment({
          comment: formData,
          token: String(userData?.accessToken),
          commentId: Number(comment?.id)
        })
      default:
        await addComment({
          comment: formData,
          token: String(userData?.accessToken),
          productId: Number(productList.find((product) => {
            product.name === comment?.product_name
          }))
        })
    }
    await loadUser();
    await loadProducts();
    commentaryModalToggle(false, "post")
  }

  return (
    <div>
      <dialog open={commentaryModal[0] as boolean}>
        <form>
          <UserNameTag />
          {
            commentaryModal[1] === "delete" ?
              <h1>Tem Certeza que que quer deletar seu comentário?</h1> :

              <div>
                <textarea
                  placeholder={comment?.content || "Digite seu Comentário"}
                  id="comentary-post" cols={30} rows={10}
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
          <button type="submit"
            onSubmit={handleSubmit((formData) => handleComentaryClick(formData))}
          >{submitButtonText()}</button>
        </form>
      </dialog>
    </div>
  )
}