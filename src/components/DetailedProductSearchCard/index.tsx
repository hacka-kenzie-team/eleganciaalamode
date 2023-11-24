import Image from "next/image"
import { AddIcon } from "../_fragments/Icons"
import { IProduct } from "@/contexts/@productTypes"
import { shoppingStore } from "@/contexts/shoppingStore"
import Link from "next/link"


export const DetailedProductSearchCard = ({ product }: { product: IProduct }) => {
    const addItem = shoppingStore((state) => state.addItem);

    return (
        <li className="flex gap-8 [width: min(380px, 100%)] bg-red-900/20 py-2">
            <Link href={`/${product.slug}`}>
                <Image
                    src={product.style.url}
                    width={80}
                    height={60}
                    alt="Image of the item being sold"
                    className="h-full w-auto flex-shrink-0" />
            </Link>
            <div className="flex items-center justify-center gap-8 w-full">
                <div>
                    <h2 className="text-xs">{product.name}</h2>
                    <span className="text-xs">R$: {product.price}</span>
                </div>
                <button type="button" onClick={() => addItem(product)}
                className="ml-auto">
                    <AddIcon />
                </button>
            </div>
        </li>
    )
}