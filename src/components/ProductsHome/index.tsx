import { ProductsHomeCard } from "../ProductsHomeCard"
import { CategoryButton } from "../_fragments/Buttons"
import { SearchInput } from "../_fragments/Inputs"

export const ProductsHome = () => {


    return (
        <section>
            <SearchInput />
            <ul>
                <li><CategoryButton>Categoria 1</CategoryButton></li>
                <li><CategoryButton>Categoria 2</CategoryButton></li>
                <li><CategoryButton>Categoria 3</CategoryButton></li>
                <li><CategoryButton>Categoria 4</CategoryButton></li>
            </ul>
            <ul>
                <ProductsHomeCard />
                <ProductsHomeCard />
                <ProductsHomeCard />
                <ProductsHomeCard />
            </ul>
        </section>
    )
}