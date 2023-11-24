import { IProduct } from "@/contexts/@productTypes"
import { ProductsHomeCard } from "../ProductsHomeCard"
import { SearchInput } from "../_fragments/Inputs"
import { CategoryButton } from "../_fragments/buttons/CategoryButton"


interface IProductsHomeProps{
    allProducts: IProduct[]
}


export const ProductsHome = ({allProducts}: IProductsHomeProps) => {

    return (
        <section className="flex flex-col gap-9">
            <SearchInput />
            <ul className="w-full justify-between hidden lg:flex">
                <li><CategoryButton>roupas</CategoryButton></li>
                <li><CategoryButton>calçados</CategoryButton></li>
                <li><CategoryButton>acessórios</CategoryButton></li>
                <li><CategoryButton>ternos</CategoryButton></li>
            </ul>
            <ul className="flex flex-col justify-center gap-10 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-20">
                {allProducts.map(
                    (product) => 
                    <ProductsHomeCard product={product} key={product.id}/>
                )}
            </ul>
        </section>
    )
}