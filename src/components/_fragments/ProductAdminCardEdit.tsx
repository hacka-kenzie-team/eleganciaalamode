"use client"
import trashIcon from "@/assets/icons/trashIcon.svg"
import editIcon from "@/assets/icons/editIcon.svg"
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
          <button className="bg-second px-5 py-2 rounded-md" onClick={() => handleEditClick()}>
            <Image src={editIcon} alt="Icone de um lápis"/>
          </button>
          <button className="bg-second px-5 py-2 rounded-md" onClick={() => handledeleteClick()}>
            <Image src={trashIcon} alt="Icone de uma lixeira"/>
          </button>
        </div>
      </>
    )
}