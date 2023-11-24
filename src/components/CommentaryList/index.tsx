'use client'
import { productStore } from "@/contexts/productStore";
import { CommentaryCard } from "../CommentaryCard"
import { CommentaryIcon } from "../_fragments/Icons"
import { commentStore } from "@/contexts/commentStore";
import { userStore } from "@/contexts/userStore";


export const CommentaryList = ({productName}:{productName: string}) => {
    const { productList, setActiveProduct } = productStore((state) => state);
    const product = productList.find((product) => product.slug === productName);
    const { commentaryModalToggle } = commentStore((state) => state)
    const { userData, setMessage } = userStore((state) => state)

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
        setTimeout(() => setMessage(""), 2500);
    }

    return (
        <section className="min-w-[280px] py-5">
            <button onClick={() => handleCommentaryClick()}>
                <CommentaryIcon>{product?.comments.length} Deixe sua Avaliação</CommentaryIcon>
            </button>
            <ul className="flex flex-col h-full gap-3 overflow-y-auto">
                {
                    !product?.comments.length ?
                    <li className="my-auto">Seja O primeiro a avaliar!</li> :
                    product.comments.map((comment) => 
                    <CommentaryCard comment={comment} key={comment.id}/>)
                }
            </ul>
        </section>
    )
}