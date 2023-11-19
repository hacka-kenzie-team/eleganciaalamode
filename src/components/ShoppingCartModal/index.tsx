'use client'
import { shoppingStore } from "@/contexts/shoppingStore"
import { ShoppingCartModalCard } from "../ShoppingCartModalCard"

export const ShoppingCartModal = () => {
    const {
        setShoppingModal,
        shoppingModal,
        shoppingList
    } = shoppingStore((state) => state)

    return (
        <div>
            <dialog open={shoppingModal}>
                <div>
                    <h1>CARRINHO DE COMPRAS</h1>
                    <button
                        type="button"
                        onClick={() => setShoppingModal(false)}>
                        FECHAR
                    </button>
                    <ul>
                        {!shoppingList ? <li>Nenhum Item Adicionado</li> :
                            shoppingList.map((shoppingItem) =>
                                <ShoppingCartModalCard
                                    shoppingItem={shoppingItem}
                                    key={shoppingItem.product.id} />)
                        }
                    </ul>
                    <div>
                        <span>Total </span>
                        <span>R$: {
                            !shoppingList ? "00,00" :
                                shoppingList.reduce(
                                    (a, c) =>
                                    a + (c.product.price * c.quantity), 
                                0).toFixed(2)
                            }
                        </span>
                    </div>
                </div>
            </dialog>
        </div>
    )
}