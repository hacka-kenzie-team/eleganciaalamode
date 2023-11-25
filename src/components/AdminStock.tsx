import { productStore } from "@/contexts/productStore";

export const AdminStock = () => {
    const productsList = productStore((state) => state.productList);
    const lowStockList = productsList.filter((product) => product.stock < 10)
    return (
        <section>
            <h1>Lista de produtos em baixo estoque</h1>
            <ul>
                {lowStockList.map((product) => <li>
                    <p>{product.name}</p>
                    <p>{product.stock}</p>
                    <button>
                        modificar estoque
                    </button>
                </li>)}
            </ul>
        </section>
    )
}