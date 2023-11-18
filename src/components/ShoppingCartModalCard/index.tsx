import Image from "next/image"
import placeholder from "../../../public/vercel.svg"
import { AddIcon, SubtractIcon } from "../_fragments/Icons"


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
                    <AddIcon />
                    <SubtractIcon />
                </div>
            </div>
        </li>
    )
}