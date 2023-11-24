'use client'
import Image from "next/image"
import { AddIcon } from "../_fragments/Icons"
import { IProduct } from "@/contexts/@productTypes"
import { shoppingStore } from "@/contexts/shoppingStore"
import { DefaultButton } from "../_fragments/buttons/DefaultButton"


export const SalesCard = ({product}:{product:IProduct}) => {
    const addItem = shoppingStore((state) => state.addItem)

    return (
        <li className="flex flex-col justify-center gap-5">
            <Image
                src={product.style.url}
                width={150}
                height={80}
                alt="Pequena imagem de um item em promoção"
                className="rounded-md"
            />
            <div className="flex flex-col justify-center gap-2">
                <h2>20% OFF</h2>
                <span>{product.name}</span>
                <span>R$: {product.price}</span>
                <div onClick={() => addItem(product)}>
                    <DefaultButton>
                        <button type="button">comprar</button>
                    </DefaultButton> 
                </div>
            </div>
        </li>
    )
}