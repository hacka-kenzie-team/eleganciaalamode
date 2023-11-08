import Image from "next/image"
import placeholder from "../../../public/vercel.svg"
import { AddButton, SubtractButton } from "../_fragments/Buttons"


export const ShoppingCartModalCard = () => {
    return (
        <li>
            <Image
            src={placeholder}
            width={60}
            height={60}
            alt="Product picture"
            />
            <div>
                <h2>Nome do Produto</h2>
                <span>X 1</span>
            </div>
            <div>
                <span>R$: 999,99</span>
                <div>
                    <AddButton />
                    <SubtractButton />
                </div>
            </div>
        </li>
    )
}