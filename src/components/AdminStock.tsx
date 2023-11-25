import { productStore } from "@/contexts/productStore";
import { ProductsAdminCard } from "./ProductsAdminCard";

export const AdminStock = () => {
    const productsList = productStore((state) => state.productList);
    const lowStockList = productsList.filter((product) => product.stock < 10)
    return (
        <section className="flex flex-col gap-9">
            <h1>Lista de produtos em baixo estoque</h1>
            <ul className="flex flex-col justify-center gap-10 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-20">
                {lowStockList.map((product) => <ProductsAdminCard product={product} key={product.id}/>)}
            </ul>
        </section>
    )
}