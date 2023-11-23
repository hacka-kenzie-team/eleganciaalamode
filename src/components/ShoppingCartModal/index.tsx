'use client'
import { shoppingStore } from "@/contexts/shoppingStore"
import { ShoppingCartModalCard } from "../ShoppingCartModalCard"
import { IShoppingItem } from "@/contexts/@shoppingTypes"
import { userStore } from "@/contexts/userStore"
import Link from "next/link"
import { MouseEvent } from "react"


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
  const handleClickOutside = (e: MouseEvent) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      setShoppingModal(false)
    }
  }

  return (
    <div>
      <dialog open={shoppingModal} className="fixed inset-0 w-full h-full bg-white/30" 
      onClick={(e) => handleClickOutside(e)}>
        <div className="flex flex-col h-full w-1/2 bg-black shadow-white justify-between">
          <div className="flex items-center justify-between h-[13dvh] bg-red-900 shadow-white pl-10 pr-4">
            <h1 className="text-ewhite m-auto">CARRINHO DE COMPRAS</h1>
            <button className="text-ewhite"
              type="button"
              onClick={() => setShoppingModal(false)}>
              X
            </button>
          </div>
          <ul className="mb-auto overflow-y-auto flex flex-col gap-3 h-[100%] pt-3">
            {!shoppingList ? <li><p className="text-ewhite">Nenhum Item Adicionado</p></li> :
              shoppingList.map((shoppingItem) =>
                <ShoppingCartModalCard
                  shoppingItem={shoppingItem}
                  key={shoppingItem.product.id} />)
            }
          </ul>
          <div className="flex items-center justify-between h-[13dvh] bg-red-900 shadow-white p-10">
            <div>
              <span className="text-ewhite">Total </span>
              <span className="text-ewhite">R$: {
                !shoppingList ? "00,00" :
                  shoppingList.reduce(
                    (a, c) =>
                      a + (c.product.price * c.quantity),
                    0).toFixed(2)
              }
              </span>
            </div>
            <button className="text-ewhite"
              type="button" onClick={() => clearShoppingList()}>Limpar carrinho</button>
            {
              userData ?
                <button className="text-ewhite"
                  type="button" onClick={() => handleBuyClick(shoppingList)}>Finalizar pedido</button>
                :
                <Link className="text-ewhite"
                  href={"/login"}>Entre para finalizar compra</Link>
            }
          </div>
        </div>
      </dialog>
    </div>
  )
}