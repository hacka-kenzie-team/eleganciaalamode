import Image from "next/image"
import { BuyIcon, CommentaryIcon, RatingIcon } from "../_fragments/Icons"
import { IProduct } from "@/contexts/@productTypes"
import { getAverageScore } from "@/utils/getAverageScore"
import { shoppingStore } from "@/contexts/shoppingStore"


export const DetailedProductSearchCard = ({ product }: { product: IProduct }) => {
    const addItem = shoppingStore((state) => state.addItem);

    return (
        <li>
            <Image
                src={product.style.url}
                width={60}
                height={40}
                alt="Image of the item being sold"
            />
            <div>
                <div>
                    <h2>{product.name}</h2>
                    <span>R$: {product.price}</span>
                </div>
                <RatingIcon>{getAverageScore(product.comments)}</RatingIcon>
                <CommentaryIcon>{product.comments.length}</CommentaryIcon>
                <button type="button" onClick={() => addItem(product)}>
                    <BuyIcon />
                </button>
            </div>
        </li>
    )
}