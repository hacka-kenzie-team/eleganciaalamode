'use client'
import { shoppingStore } from "@/contexts/shoppingStore"
import { ShoppingCartModalCard } from "../ShoppingCartModalCard"
import { IShoppingItem } from "@/contexts/@shoppingTypes"
import { userStore } from "@/contexts/userStore"
import Link from "next/link"
import { MouseEvent } from "react"
import { Loading } from "../_fragments/loading"


export const ShoppingCartModal = () => {
  const {
    setShoppingModal,
    shoppingModal,
    shoppingList,
    clearShoppingList
  } = shoppingStore((state) => state)

  const { userData, buy, loading } = userStore((state) => state)

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
      <dialog open={shoppingModal}
        role="dialog" aria-modal="true"
        onClick={(e) => handleClickOutside(e)}
        className="fixed inset-0 w-full h-full bg-white/30">
        <div className="right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-luxo min-w-[600px]">
          <div className="flex items-center justify-between bg-luxo pl-10 pr-4">
            <h1 className="m-auto py-3">CARRINHO DE COMPRAS</h1>
            <button 
              type="button"
              onClick={() => setShoppingModal(false)}>
              X
            </button>
          </div>
          {
            loading ?
              <Loading /> :
              <ul className="mb-auto overflow-y-auto flex flex-col gap-3 h-[75dvh]">
                {!shoppingList ? <li><p >Nenhum Item Adicionado</p></li> :
                  shoppingList.map((shoppingItem) =>
                    <ShoppingCartModalCard
                      shoppingItem={shoppingItem}
                      key={shoppingItem.product.id} />)
                }
              </ul>
          }
          <div className="flex items-center justify-between bg-red-900 p-10">
            <div>
              <span >Total </span>
              <span >R$: {
                !shoppingList ? "00,00" :
                  shoppingList.reduce(
                    (a, c) =>
                      a + (c.product.price * c.quantity),
                    0).toFixed(2)
              }
              </span>
            </div>
            <button
              type="button" onClick={() => clearShoppingList()}
              className="flex gap-3 items-center bg-black rounded-full w-fit px-3 py-1 mt-2 shadow-sm shadow-gray-400 hover:shadow-sm hover:shadow-gray-300 hover:scale-110 ease-in-out duration-300">
                Limpar carrinho
            </button>
            {
              userData ?
                <button 
                  type="button" onClick={() => handleBuyClick(shoppingList)}
                  className="flex gap-3 items-center bg-black rounded-full w-fit px-3 py-1 mt-2 shadow-sm shadow-gray-400 hover:shadow-sm hover:shadow-gray-300 hover:scale-110 ease-in-out duration-300">
                    Finalizar pedido
                </button>
                :
                <Link 
                  href={"/login"} onClick={() => setShoppingModal(false)}
                  className="flex gap-3 items-center bg-black rounded-full w-fit px-3 py-1 mt-2 shadow-sm shadow-gray-400 hover:shadow-sm hover:shadow-gray-300 hover:scale-110 ease-in-out duration-300">
                    Entre para finalizar compra
                </Link>
            }
          </div>
        </div>
      </dialog>
    </div>
  )
}