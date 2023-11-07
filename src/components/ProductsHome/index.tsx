import { ProductsHomeCard } from "../ProductsHomeCard"
import { CategoryButton } from "../_fragments/Buttons"

export const ProductsHome = () => {
    return (
        <section>
            <div>
                <label htmlFor="search">PESQUISA</label>
                <input placeholder="Procure um item" id="search"></input>
            </div>
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