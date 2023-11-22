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
                <li><CategoryButton>roupas</CategoryButton></li>
                <li><CategoryButton>calcados</CategoryButton></li>
                <li><CategoryButton>acessorio</CategoryButton></li>
                <li><CategoryButton>ternos</CategoryButton></li>
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