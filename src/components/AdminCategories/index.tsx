import { productStore } from "@/contexts/productStore";
import { ProductsAdminCard } from "../ProductsAdminCard";

export const AdminCategories = () => {
    const productsList = productStore((state) => state.productList);
    const calcados = productsList.filter((product) => product.category == "Calcados")
    const roupas = productsList.filter((product) => product.category == "Roupas")
    const acessorios = productsList.filter((product) => product.category == "Acessorios")
    const ternos = productsList.filter((product) => product.category == "Ternos")

    return (
        <section className="flex flex-col gap-9 divide-y divide-double divide-second">
            <div className="flex flex-col gap-5 py-5">
                <h1 className="text-2xl">Calçados</h1>
                <ul className="flex flex-col justify-center gap-10 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-20">
                    {calcados.map((product) => <ProductsAdminCard product={product} key={product.id}/>)}
                </ul>
            </div>
            <div className="flex flex-col gap-5 py-5">
                <h1 className="text-2xl">Roupas</h1>
                <ul className="flex flex-col justify-center gap-10 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-20">
                    {roupas.map((product) => <ProductsAdminCard product={product} key={product.id}/>)}
                </ul>
            </div>
            <div className="flex flex-col gap-5 py-5">
                <h1 className="text-2xl">Acessórios</h1>
                <ul className="flex flex-col justify-center gap-10 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-20">
                    {acessorios.map((product) => <ProductsAdminCard product={product} key={product.id}/>)}
                </ul>
            </div>
            <div className="flex flex-col gap-5 py-5">
                <h1 className="text-2xl">ternos</h1>
                <ul className="flex flex-col justify-center gap-10 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-20">
                    {ternos.map((product) => <ProductsAdminCard product={product} key={product.id}/>)}
                </ul>
            </div>
        </section>
    )
}