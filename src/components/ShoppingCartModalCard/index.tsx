'use client'
import Image from "next/image"
import { AddIcon, SubtractIcon } from "../_fragments/Icons"
import { IShoppingItem } from "@/contexts/@shoppingTypes"
import { shoppingStore } from "@/contexts/shoppingStore"


interface IShoppingCartModalCardProps{
    shoppingItem: IShoppingItem
}

export const ShoppingCartModalCard = ({shoppingItem}:IShoppingCartModalCardProps) => {

const { addItem, removeItem } = shoppingStore((state) => state)

    return (
        <li className="flex h-[200px] flex-shrink-0 w-full px-3 items-center justify-between overflow-hidden bg-black/60">
            <Image
            src={shoppingItem.product.style.url}
            width={356}
            height={200}
            alt="Product picture"
            className="w-[auto]"/>
            <div className="flex flex-col justify-around mr-auto pl-3">
                <h2 className="text-ewhite">{shoppingItem.product.name}</h2>
                <div className="flex flex-col gap-5 p-2">
                    <span className="text-ewhite">X {shoppingItem.quantity}</span>
                    {(shoppingItem.product.stock - shoppingItem.quantity < 10 ) && 
                    <span className="text-red-900 p-2 border-2 border-red-900 rounded-[40px] text-center">
                        Poucas unidades
                    </span>}
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <span className="text-ewhite">R$: {
                Number(shoppingItem.product.price * shoppingItem.quantity).toFixed(2)
                }</span>
                <div className="flex justify-between">
                    <button type="button" onClick={() => addItem(shoppingItem.product)}>
                        <AddIcon />
                    </button>
                    <button type="button" onClick={() => removeItem(shoppingItem.product.id)}>
                        <SubtractIcon />
                    </button>
                </div>
            </div>
        </li>
    )
}