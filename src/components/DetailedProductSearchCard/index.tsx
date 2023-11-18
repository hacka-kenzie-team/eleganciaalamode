import Image from "next/image"
import placeholder from "../../../public/vercel.svg"
import { BuyIcon, CommentaryIcon, RatingIcon } from "../_fragments/Icons"



export const DetailedProductSearchCard = () => {
    return (
        <li>
            <Image
                src={placeholder}
                width={60}
                height={40}
                alt="Image of the item being sold"
            />
            <div>
                <div>
                    <h2>Product Name</h2>
                    <span>R$: 9999,99</span>
                </div>
                <RatingIcon>8</RatingIcon>
                <CommentaryIcon>2</CommentaryIcon>
                <BuyIcon />
            </div>
        </li>
    )
}