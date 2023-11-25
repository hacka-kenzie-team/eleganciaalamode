import { productStore } from "@/contexts/productStore";
import { ProductsAdminCard } from "../ProductsAdminCard";

export const AdminCollections = () => {
    const productsList = productStore((state) => state.productList);
    const outonoInverno = productsList.filter((product) => product.collection == "outono-inverno")
    const primaveraVerao = productsList.filter((product) => product.collection == "primavera-verao")
    const business = productsList.filter((product) => product.collection == "business")

    return (
        <section className="flex flex-col gap-9">
            <div>
                <h1>outono-inverno</h1>
                <ul className="flex flex-col justify-center gap-10 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-20">
                    {outonoInverno.map((product) => <ProductsAdminCard product={product} key={product.id}/>)}
                </ul>
            </div>
            <div>
                <h1>primavera-verao</h1>
                <ul className="flex flex-col justify-center gap-10 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-20">
                    {primaveraVerao.map((product) => <ProductsAdminCard product={product} key={product.id}/>)}
                </ul>
            </div>
            <div>
                <h1>business</h1>
                <ul className="flex flex-col justify-center gap-10 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-20">
                    {business.map((product) => <ProductsAdminCard product={product} key={product.id}/>)}
                </ul>
            </div>
        </section>
    )
}