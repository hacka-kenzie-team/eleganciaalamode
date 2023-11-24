'use client'
import Image from "next/image"
import { AddIcon } from "../_fragments/Icons"
import { IProduct } from "@/contexts/@productTypes"
import { shoppingStore } from "@/contexts/shoppingStore"
import Link from "next/link"


export const SalesCard = ({ product }: { product: IProduct }) => {
    const addItem = shoppingStore((state) => state.addItem)

    return (
        <li className="flex gap-6 bg-red-900/50 rounded-r-lg pr-4 py-2 [width:_min(480px,95dvw)]">
            <Link href={`${product.slug}`}>
                <Image
                    src={product.style.url}
                    width={150}
                    height={80}
                    alt="Pequena imagem de um item em promoção"
                    className="h-full w-auto" />
            </Link>
            <div className="w-full flex flex-col justify-between">
                <h2>20% OFF</h2>
                <span className="text-sm">{product.name}</span>
                <div className="flex items-center justify-around">
                    <span>R$: {((product.price * 80) / 100).toFixed(2)}</span>
                    <button type="button" onClick={() => addItem(product)}
                        className="ml-auto">
                        <AddIcon />
                    </button>
                </div>
            </div>
        </li>
    )
}