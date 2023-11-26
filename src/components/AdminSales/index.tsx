import { productStore } from "@/contexts/productStore";
import { ProductsAdminCard } from "../ProductsAdminCard";

export const AdminSales = () => {
    const productsList = productStore((state) => state.productList);
    const salesList = productsList.filter((product) => product.sale === true)
    return (
        <section className="flex flex-col gap-9">
            <h1 className="flex justify-center mt-5">Lista de itens em promoção</h1>
            <ul className="flex flex-col justify-center gap-10 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-20">
                {salesList.map((product) => 
                <ProductsAdminCard product={product} key={product.id} />)}
            </ul>
        </section>
    )
}