import Image from "next/image"
import placeholder from "../../../public/vercel.svg"
import { BuyButton, ComentaryButton, RatingButton } from "../_fragments/Buttons"

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
                <ComentaryButton>2</ComentaryButton>
                <BuyButton />
            </div>
        </li>
    )
}