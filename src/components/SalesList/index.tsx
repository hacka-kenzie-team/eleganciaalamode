'use client'
import { productStore } from "@/contexts/productStore"
import { SalesCard } from "../SalesCard"

export const SalesList = () => {
    const { productList } = productStore((state) => state)
    const salesList = productList.filter((product) => product.sale === true)

    return (
        <section>
            <ul className="flex flex-col gap-4">
                <li>Promoções</li>
                {!salesList ?
                    <li>
                        nenhum item em promoção por enquanto
                    </li>
                    :
                    salesList.map((product) =>
                        <SalesCard product={product} key={product.id} />)
                }
            </ul>
        </section>
    )
}