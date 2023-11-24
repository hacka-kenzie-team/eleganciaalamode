'use client'
import { productStore } from "@/contexts/productStore"
import { DetailedProductSearchCard } from "../DetailedProductSearchCard"
import { SearchInput } from "../_fragments/Inputs"
import { nameContainsWord } from "@/utils/pathnameContainsString"


export const DetailedProductSearchList = () => {
    const {
        productList,
        searchInput
    } = productStore((state) => state)


    const spotlightList = productList.filter((product) => product.spotlight === true)
    const searchedList = productList.filter((product) => {
        if (nameContainsWord(product.name, searchInput) ||
            product.keywords.find((item) => item.entry == searchInput)) {
            return product
        }
    })

    return (
        <section>
            <SearchInput />
            <ul className="flex flex-col gap-4 mt-5">
                {!searchedList ? (
                    <li>Nenhum produto encontrado</li>
                ) : !searchInput ? (
                    spotlightList.map((product) => (
                        <DetailedProductSearchCard key={product.id} product={product} />
                    ))
                ) : (
                    searchedList.map((product) => (
                        <DetailedProductSearchCard key={product.id} product={product} />
                    ))
                )}
            </ul>
        </section>
    )
}