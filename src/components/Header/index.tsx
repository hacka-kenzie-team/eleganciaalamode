'use client'
import Image from "next/image"
import { HeaderNav } from "../HeaderNav"
import placeholder from "../../../public/next.svg"
import Link from "next/link"
import { userStore } from "@/contexts/userStore"
import { useEffect } from "react"
import { productStore } from "@/contexts/productStore"
import { shoppingStore } from "@/contexts/shoppingStore"
import { IShoppingItem } from "@/contexts/@shoppingTypes"
import { useSession } from "next-auth/react"


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

  const getTotatShoppingItems = (list:IShoppingItem[]) => {
    if (!list){
      return 0
    }
    return list.reduce((a, c) => a + c.quantity, 0);
  }

  return (
    <header>
      <div>
        <Link href={"/"}>HOME</Link>
        <Image
          src={placeholder}
          height={50}
          width={50}
          alt="Logo de Elegancia á La Mode"
        />
      </div>
      <div>
        <HeaderNav />
        <button type="button" onClick={() => setShoppingModal(true)}>
          <p>carrinho de compras</p>
          <span>{getTotatShoppingItems(shoppingList)}</span>
          <Image
            src={placeholder}
            height={50}
            width={50}
            alt="Ícone de carrinho de compras"
          />
        </button>
      </div>
    </header>
  )
}