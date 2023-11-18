import { IProduct } from "@/contexts/@productTypes"
import { ProductsHomeCard } from "../ProductsHomeCard"
import { SearchInput } from "../_fragments/Inputs"
import { CategoryButton } from "../_fragments/buttons/CategoryButton"


interface IProductsHomeProps{
    allProducts: IProduct[]
}


export const ProductsHome = ({allProducts}: IProductsHomeProps) => {

    return (
        <section>
            <SearchInput />
            <ul>
                <li><CategoryButton>Roupas</CategoryButton></li>
                <li><CategoryButton>Calçados</CategoryButton></li>
                <li><CategoryButton>Acessórios</CategoryButton></li>
                <li><CategoryButton>Ternos</CategoryButton></li>
            </ul>
            <ul>
                {allProducts.map(
                    (product) => 
                    <ProductsHomeCard product={product} key={product.id}/>
                )}
            </ul>
        </section>
    )
}