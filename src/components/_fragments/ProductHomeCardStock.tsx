'use client'

import { productStore } from "@/contexts/productStore";

interface IProductHomeCardStockProps {
    productId: number;
}
export const ProductHomeCardStock = ({productId}: IProductHomeCardStockProps) => {
    const {productList} = productStore((state) => state);
    const product = productList.find((product) => product.id === productId);

    return (
        <div>
            <h1>{product?.price}</h1>
            <p>Estoque:</p>
            <p>X {product?.stock}</p>
          </div>
    )
}