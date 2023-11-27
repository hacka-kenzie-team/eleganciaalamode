'use client'

import { productStore } from "@/contexts/productStore";

interface IProductHomeCardStockProps {
    productId: number;
}
export const ProductHomeCardStock = ({productId}: IProductHomeCardStockProps) => {
    const {productList} = productStore((state) => state);
    const product = productList.find((product) => product.id === productId);

    return (
        <div className="flex items-center justify-between">
            <h1>R$ {product?.price}</h1>
            <div className="flex items-center gap-2">
                <p>Estoque:</p>
                <p>{product?.stock}</p>
            </div>
          </div>
    )
}