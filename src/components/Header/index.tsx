'use client'

import Image from "next/image"
import { HeaderNav } from "../HeaderNav"
import Link from "next/link"
import { userStore } from "@/contexts/userStore"
import { useEffect, useState } from "react"
import { productStore } from "@/contexts/productStore"
import { shoppingStore } from "@/contexts/shoppingStore"
import { IShoppingItem } from "@/contexts/@shoppingTypes"
import { DefaultButton } from "../_fragments/buttons/DefaultButton"
import { OptionMobileModal } from "../OptionMobileModal"
import { usePathname } from "next/navigation"


export const Header = () => {
  const { loadUser, userData } = userStore((state) => state);
  const { loadProducts } = productStore((state) => state);
  const { setShoppingModal, shoppingList } = shoppingStore((state) => state);
  const [isModalOpen, setIsModaOpen] = useState<boolean>(false);

  useEffect(() => {
    const initiate = async () => {
      await loadUser();
      loadProducts();
    };
    initiate();
  }, []);

  const getTotatShoppingItems = (list: IShoppingItem[]) => {
    if (!list) {
      return 0;
    }
    return list.reduce((a, c) => a + c.quantity, 0);
  };

  const pathname = usePathname();
  const displayHeader = () => {
    if (pathname === "/login" || pathname === "/register") {
      return false;
    } else {
      return true;
    }
  }
  return (
    <>
      {
        displayHeader() &&
        <header className="bg-primary flex items-center justify-between px-2 h-24 md:px-[50px]">
          <Link href={"/"}>
            <h2 className="text-3xl text-second">ElegânciaÀLaMode</h2>
          </Link>
          <Image
            src="/icons/ButtonModalMobileIcon.svg"
            height={60}
            width={60}
            alt="três linhas representando um botão"
            className="lg:hidden"
            onClick={() => setIsModaOpen(true)}
          />
          <div className="items-center justify-center  hidden lg:flex">
            <HeaderNav />
          </div>
          <div className=" hidden lg:flex gap-8 z-10 text-second">
            <div>
              {userData ? (
                <h3 className="text-2xl">{`Olá, ${userData.user.name}`}</h3>
              ) : (
                <div className="md:hover:scale-[1.02] transition-all">
                  <Link href={"/login"}>
                    <DefaultButton>login</DefaultButton>
                  </Link>
                </div>
              )}
            </div>
            <button
              className="relative hover:translate-y-px transition-all"
              type="button"
              onClick={() => setShoppingModal(true)}
            >
              <Image
                src="/icons/cartIcon.svg"
                height={30}
                width={30}
                alt="Uma sacola de compra, representando o carrinho de compra"
                className="h-[30px] w-auto"
              />
              <div className="absolute top-[20px] left-[15px] right-0 bg-white w-[20px] rounded-md text-primary">
                <span>{getTotatShoppingItems(shoppingList)}</span>
              </div>
            </button>
          </div>
          <OptionMobileModal
            isModalOpen={isModalOpen}
            setIsModaOpen={setIsModaOpen}
          />
        </header>
      }
    </>
  );
};
