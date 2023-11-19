'use client'
import Image from "next/image"
import { AddIcon } from "../_fragments/Icons"
import { IProduct } from "@/contexts/@productTypes"
import { shoppingStore } from "@/contexts/shoppingStore"


export const SalesCard = ({product}:{product:IProduct}) => {
    const addItem = shoppingStore((state) => state.addItem)

    return (
        <li>
            <Image
                src={product.style.url}
                width={150}
                height={80}
                alt="Pequena imagem de um item em promoção"
            />
            <div>
                <h2>20% OFF</h2>
                <span>{product.name}</span>
                <span>R$: {product.price}</span>
                <button type="button" onClick={() => addItem(product)}>
                        <AddIcon />
                        add
                </button>
            </div>
        </li>
    )
}