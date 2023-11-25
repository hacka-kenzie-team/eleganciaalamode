'use client'
import { productStore } from "@/contexts/productStore"
import { ProductsAdminCard } from "../ProductsAdminCard";

export const AdminProducts = () => {
    const productsList = productStore((state) => state.productList);
    return (
        <section className="flex flex-col gap-9">
            <p>Lista de todos produtos</p>
            <ul className="flex flex-col justify-center gap-10 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-20">
                {productsList.map((product) => <ProductsAdminCard product={product} key={product.id} />)}
            </ul>
        </section>
    )
}
//search sera adicionado esta página