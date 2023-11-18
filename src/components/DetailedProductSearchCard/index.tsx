import Image from "next/image"
import placeholder from "../../../public/vercel.svg"
import { BuyButton, CommentaryButton, RatingButton } from "../_fragments/Buttons"

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
                <RatingButton>8</RatingButton>
                <CommentaryButton>2</CommentaryButton>
                <BuyButton />
            </div>
        </li>
    )
}