'use client'
import Image from "next/image"
import placeholder from "../../../public/vercel.svg"
import { AddIcon, SubtractIcon } from "../_fragments/Icons"
import { IShoppingItem } from "@/contexts/@shoppingTypes"
import { shoppingStore } from "@/contexts/shoppingStore"


interface IShoppingCartModalCardProps{
    shoppingItem: IShoppingItem
}

export const ShoppingCartModalCard = ({shoppingItem}:IShoppingCartModalCardProps) => {

const { addItem, removeItem } = shoppingStore((state) => state)

    return (
        <li>
            <Image
            src={placeholder}
            width={60}
            height={60}
            alt="Product picture"
            />
            <div>
                <h2>{shoppingItem.product.name}</h2>
                <span>X {shoppingItem.quantity}</span>
            </div>
            <div>
                <span>R$: {Number(shoppingItem.product.price).toFixed(2)}</span>
                <div>
                    <button type="button" onClick={() => addItem(shoppingItem.product)}>
                        <AddIcon />
                        add
                    </button>
                    <button type="button" onClick={() => removeItem(shoppingItem.product.id)}>
                        <SubtractIcon />
                        subtract
                    </button>
                </div>
            </div>
        </li>
    )
}