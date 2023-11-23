'use client'

import { productStore } from "@/contexts/productStore";

interface IProductHomeCardStockProps {
    productId: number;
}
export const ProductHomeCardStock = ({ productId }: IProductHomeCardStockProps) => {
    const { productList } = productStore((state) => state);
    const product = productList.find((product) => product.id === productId);

    return (
        <div className="flex justify-between p-2   ">
            <div>
                <p>Estoque:</p>
                <div className="flex items-center gap-6 pt-2">
                    <p>X {product?.stock}</p>
                    {product && (product.stock  < 10 ) && 
                    <span className="text-red-900 text-sm p-2 border-2 border-red-900 rounded-[40px] text-center bg-black">
                        {product.stock < 1 ? "Fora de Estoque" : "Poucas unidades"}
                    </span>}
                </div>
            </div>
            <h1>Preço: {product?.price} R$</h1>
        </div>
    )
}