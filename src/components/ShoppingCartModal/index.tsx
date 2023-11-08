import { ShoppingCartModalCard } from "../ShoppingCartModalCard"

export const ShoppingCartModal = () => {
    return (
        <div>
            <dialog open>
                <div>
                    <h1>CARRINHO DE COMPRAS</h1>
                    <ul>
                        <ShoppingCartModalCard />
                        <ShoppingCartModalCard />
                        <ShoppingCartModalCard />
                    </ul>
                    <div>
                        <span>Total </span><span>R$: 00,00</span>
                    </div>
                </div>
            </dialog>
        </div>
    )
}