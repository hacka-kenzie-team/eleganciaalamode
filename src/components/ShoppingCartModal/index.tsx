'use client'
import { shoppingStore } from "@/contexts/shoppingStore"
import { ShoppingCartModalCard } from "../ShoppingCartModalCard"
import { IShoppingItem } from "@/contexts/@shoppingTypes"
import { userStore } from "@/contexts/userStore"
import Link from "next/link"


export const ShoppingCartModal = () => {
    const {
        setShoppingModal,
        shoppingModal,
        shoppingList,
        clearShoppingList
    } = shoppingStore((state) => state)

    const { userData, buy } = userStore((state) => state)

    const handleBuyClick = (shoppingList: IShoppingItem[]) => {
        userData &&
            buy({
                order: {
                    user_id: userData.user.id,
                    is_paid: true,
                    items_bought:
                        shoppingList.map((item) => {
                            return {
                                product_name: item.product.name,
                                product_price: item.product.price,
                                quantity: item.quantity,
                                productId: item.product.id,
                                quantityTotal: item.product.stock
                            }
                        }
                        )
                }
            })
    }

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
                    <button type="button" onClick={() => clearShoppingList()}>Limpar carrinho</button>
                    {
                        userData ?
                            <button type="button" onClick={() => handleBuyClick(shoppingList)}>Finalizar pedido</button>
                            :
                            <Link href={"/login"}>Entre para finalizar compra</Link>
                    }
                </div>
            </dialog>
        </div>
    )
}