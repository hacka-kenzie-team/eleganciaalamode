'use client'
import Image from "next/image"
import { HeaderNav } from "../HeaderNav"
import eleganciaLogo from "../../../public/hero/elganciaalamode.png"
import shopCart from "../../../public/icons/shop-cart.svg"
import Link from "next/link"
import { userStore } from "@/contexts/userStore"
import { useEffect } from "react"
import { productStore } from "@/contexts/productStore"
import { shoppingStore } from "@/contexts/shoppingStore"
import { IShoppingItem } from "@/contexts/@shoppingTypes"


export const Header = () => {
  const { loadUser } = userStore((state) => state)
  const { loadProducts } = productStore((state) => state)
  const { setShoppingModal, shoppingList } = shoppingStore((state) => state)


  useEffect(() => {
    const initiate = async () => {
      await loadUser()
      loadProducts()
    }
    initiate()
  }, []);

  const getTotatShoppingItems = (list: IShoppingItem[]) => {
    if (!list) {
      return 0
    }
    return list.reduce((a, c) => a + c.quantity, 0);
  }

  return (
    <header className="bg-red-900 h-[10dvh] shadow-white">
      <div className="max-w-[1400px] m-auto flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={eleganciaLogo}
            height={394}
            width={672}
            alt="Logo de Elegancia á La Mode"
            className="h-[10dvh] w-auto object-cover"/>
        </Link>
        <div className="flex items-center gap-3">
          <HeaderNav />
          <button className="flex gap-1 items-center justify-center"
          type="button" onClick={() => setShoppingModal(true)}>
            <Image
              src={shopCart}
              height={50}
              width={50}
              alt="Ícone de carrinho de compras"
              />
              <div className="w-8 h-8 flex-shrink-0 rounded-[50%] bg-egray">
                <span className="flex align-bottom justify-center">
                {getTotatShoppingItems(shoppingList)}
                </span>
              </div>
          </button>
        </div>
      </div>
    </header>
  )
}