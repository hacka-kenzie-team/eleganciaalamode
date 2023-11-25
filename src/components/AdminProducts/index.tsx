'use client'
import { productStore } from "@/contexts/productStore"

export const AdminProducts = () => {
    const productsList = productStore((state) => state.productList);
    return (
        <section>
            <p>Lista de todos produtos</p>
            <ul>
                {productsList.map((product) => <li>{product.name}</li>)}
            </ul>
        </section>
    )
}
//search sera adicionado esta página