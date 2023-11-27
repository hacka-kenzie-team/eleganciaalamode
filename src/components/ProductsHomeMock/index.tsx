'use client'
import { mockProducts } from "@/utils/mockproducts"
import { ProductsHomeCard } from "../ProductsHomeCard"
import { SearchInput } from "../_fragments/Inputs"
import { CategoryButton } from "../_fragments/buttons/CategoryButton"

export const ProductsHomeMock = () => {

    return (
        <section className="flex flex-col gap-9">
            <SearchInput />
            <ul className="w-full justify-between hidden lg:flex">
                <li><CategoryButton>Roupas</CategoryButton></li>
                <li><CategoryButton>Calçados</CategoryButton></li>
                <li><CategoryButton>Acessórios</CategoryButton></li>
                <li><CategoryButton>Ternos</CategoryButton></li>
            </ul>
            <ul className="flex flex-col justify-center gap-10 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-20">
                {mockProducts.map(
                    (product) => 
                    <ProductsHomeCard product={product} key={product.id}/>
                )}
            </ul>
        </section>
    )
}