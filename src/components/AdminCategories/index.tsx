import { productStore } from "@/contexts/productStore";

export const AdminCategories = () => {
    const productsList = productStore((state) => state.productList);
    const calcados = productsList.filter((product) => product.category == "Calcados")
    const roupas = productsList.filter((product) => product.category == "Roupas")
    const acessorios = productsList.filter((product) => product.category == "Acessorios")
    const ternos = productsList.filter((product) => product.category == "Ternos")

    return (
        <section>
            <div>
                <h1>Calçados</h1>
                <ul>
                    {calcados.map((product) => <li key={product.id}>{product.name}</li>)}
                </ul>
            </div>
            <div>
                <h1>Roupas</h1>
                <ul>
                    {roupas.map((product) => <li key={product.id}>{product.name}</li>)}
                </ul>
            </div>
            <div>
                <h1>Acessórios</h1>
                <ul>
                    {acessorios.map((product) => <li key={product.id}>{product.name}</li>)}
                </ul>
            </div>
            <div>
                <h1>ternos</h1>
                <ul>
                    {ternos.map((product) => <li key={product.id}>{product.name}</li>)}
                </ul>
            </div>
        </section>
    )
}