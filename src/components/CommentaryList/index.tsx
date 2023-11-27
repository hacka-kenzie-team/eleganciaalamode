'use client'
import { productStore } from "@/contexts/productStore";
import { CommentaryCard } from "../CommentaryCard"
import { CommentaryIcon } from "../_fragments/Icons"
import { userStore } from "@/contexts/userStore";
import { commentStore } from "@/contexts/commentStore";
import { adminStore } from "@/contexts/adminStore";


export const CommentaryList = ({productName}:{productName: string}) => {
    const { productList, setActiveProduct } = productStore((state) => state);
    const product = productList.find((product) => product.slug === productName);
    const {userData} = userStore((state) => state)
    const {setMessage} = adminStore((state) => state)
    const {commentaryModalToggle, setActiveComment} = commentStore((state) => state)

    const handleCommentaryClick = () => {
        product && setActiveProduct(product)
        if (userData) {
            const hasAComment = userData.user.comments.some((comment) => 
                 (comment.product_name == product?.name)
            )
            hasAComment ? 
            setMessage("Só é permitido um comentário por item")
            :
            commentaryModalToggle(true, "post")
        } else {
            setMessage("Por favor, faça login para poder comentar")
        }
        setActiveComment(null)
        setTimeout(() => setMessage(""), 2500);
    }

    return (
        <section className="flex flex-col gap-5">
            <button onClick={() => handleCommentaryClick()}>
                <CommentaryIcon>{product?.comments.length} Deixe sua Avaliação</CommentaryIcon>
            </button>
            <ul>
                {
                    !product ?
                    <li>Seja O primeiro a avaliar!</li> :
                    product.comments.map((comment) => 
                    <CommentaryCard comment={comment} key={comment.id}/>)
                }
            </ul>
        </section>
    )
}