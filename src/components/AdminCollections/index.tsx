import { productStore } from "@/contexts/productStore";

export const AdminCollections = () => {
    const productsList = productStore((state) => state.productList);
    const outonoInverno = productsList.filter((product) => product.collection == "outono-inverno")
    const primaveraVerao = productsList.filter((product) => product.collection == "primavera-verao")
    const business = productsList.filter((product) => product.collection == "business")

    return (
        <section>
            <div>
                <h1>outono-inverno</h1>
                <ul>
                    {outonoInverno.map((product) => <li>{product.name}</li>)}
                </ul>
            </div>
            <div>
                <h1>primavera-verao</h1>
                <ul>
                    {primaveraVerao.map((product) => <li>{product.name}</li>)}
                </ul>
            </div>
            <div>
                <h1>business</h1>
                <ul>
                    {business.map((product) => <li>{product.name}</li>)}
                </ul>
            </div>
        </section>
    )
}