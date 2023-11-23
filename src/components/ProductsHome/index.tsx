import { IProduct } from "@/contexts/@productTypes"
import { ProductsHomeCard } from "../ProductsHomeCard"
import { SearchInput } from "../_fragments/Inputs"
import { CategoryButton } from "../_fragments/buttons/CategoryButton"


interface IProductsHomeProps{
    allProducts: IProduct[]
}


export const ProductsHome = ({allProducts}: IProductsHomeProps) => {

    return (
        <section className="container max-w-[1400px] m-auto pt-4">
            <SearchInput />
            <ul className="flex justify-around w-full py-5">
                <li><CategoryButton>Roupas</CategoryButton></li>
                <li><CategoryButton>Calçados</CategoryButton></li>
                <li><CategoryButton>Acessórios</CategoryButton></li>
                <li><CategoryButton>Ternos</CategoryButton></li>
            </ul>
            <ul className="flex flex-col gap-5">
                {allProducts.map(
                    (product) => 
                    <ProductsHomeCard product={product} key={product.id}/>
                )}
            </ul>
        </section>
    )
}