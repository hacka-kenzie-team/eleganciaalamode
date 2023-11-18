import Image from "next/image"
import placeholder from "../../../public/vercel.svg"
import { AddIcon } from "../_fragments/Icons"



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
                <AddIcon />
            </div>
        </li>
    )
}