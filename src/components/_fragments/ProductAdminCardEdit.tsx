"use client"

import Image from "next/image";
import { adminStore } from "@/contexts/adminStore";
import { productStore } from "@/contexts/productStore";


interface IProductHomeCardInfoProps{
    productId: number;
}

export const ProductAdminCardEdit = ({productId}: IProductHomeCardInfoProps) => {
  const {setAdminDeleteModal, setAdminEditModal} = adminStore((state) => state);
  const {setActiveProduct, productList} = productStore((state) => state)
  const product = productList.find((product) => productId === product.id)
  const handleEditClick = () => {
    setAdminEditModal(true)
    product && setActiveProduct(product);
  }
  const handledeleteClick = () => {
    setAdminDeleteModal(true)
    product && setActiveProduct(product);
  }
    return (
      <>
        <div className="flex items-center justify-between">
          <button className="bg-second px-5 py-2 rounded-md relative h-[32px] w-[32px]" onClick={() => handleEditClick()}>
            <Image src="/icons/editIcon.svg" alt="Icone de um lápis" fill/>
          </button>
          <button className="bg-second px-5 py-2 rounded-md" onClick={() => handledeleteClick()}>
            <Image src="/icons/trashIcon.svg" alt="Icone de uma lixeira"/>
          </button>
        </div>
      </>
    )
}