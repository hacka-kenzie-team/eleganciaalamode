import Image from "next/image"
import placeholder from "../../../public/vercel.svg"
import { AddButton } from "../_fragments/Buttons"


export const SalesCard = () => {
    return (
        <li>
            <Image
                src={placeholder}
                width={150}
                height={80}
                alt="Pequena imagem de um item em promoção"
            />
            <div>
                <h2>20% OFF</h2>
                <span>Nome do produto</span>
                <span>R$: 9999,00</span>
                <AddButton />
            </div>
        </li>
    )
}