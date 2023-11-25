'use client'
import { productStore } from "@/contexts/productStore"
import { SalesCard } from "../SalesCard"
import { Hrs } from "../_fragments/hr"

export const SalesList = () => {
    const { productList } = productStore((state) => state)
    const salesList = productList.filter((product) => product.sale === true)

    return (
        <section className="pt-8 w-[100vw]">
            <Hrs />
            <div className="w-full flex justify-center mb-5 pt-8">
                <h3>promoções:</h3>
            </div>
            <ul className="flex justify-center items-center gap-10">
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