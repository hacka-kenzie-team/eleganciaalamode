'use client'
import { productStore } from "@/contexts/productStore";
import { CommentaryCard } from "../CommentaryCard"
import { CommentaryIcon } from "../_fragments/Icons"


export const CommentaryList = ({productName}:{productName: string}) => {
    const { productList } = productStore((state) => state);
    const product = productList.find((product) => product.slug === productName);

    return (
        <section>
            <CommentaryIcon>{product?.comments.length} Deixe sua Avaliação</CommentaryIcon>
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