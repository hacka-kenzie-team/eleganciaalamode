'use client'

interface IProductHomeCardStockProps {
    productId: number;
}
export const ProductHomeCardStock = ({productId}: IProductHomeCardStockProps) => {
    return (
        <div>
            <h1>product.price</h1>
            <p>Estoque:</p>
            <p>xproduct.stock</p>
          </div>
    )
}