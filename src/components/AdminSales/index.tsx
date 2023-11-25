import { productStore } from "@/contexts/productStore";

export const AdminSales = () => {
    const productsList = productStore((state) => state.productList);
    const salesList = productsList.filter((product) => product.sale === true)
    return (
        <section>
            <h1>Lista de itens em promoção</h1>
            <ul>
                {salesList.map((product) => 
                <li>
                    {product.name}
                    <button>
                        remover da promoção
                    </button>
                </li>)}
            </ul>
        </section>
    )
}