"use client"
import { productStore } from "@/contexts/productStore";
import trashIcon from "@/assets/icons/trashIcon.svg"
import editIcon from "@/assets/icons/editIcon.svg"
import Image from "next/image";
import { ModalAdminConfirmDelete } from "./ModalAdminConfirmDelete";
import { useState } from "react";
import { ProductAdminModalEdit } from "../ProductAdminModalEdit";

interface IProductHomeCardInfoProps{
    productId: number;
}

export const ProductAdminCardEdit = ({productId}: IProductHomeCardInfoProps) => {
    // const { productList } = productStore((state) => state);
    // const product = productList.find((product) => product.id === productId);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [isOpenModalEdit, setIsOpenModalEdit] = useState<boolean>(false)



    return (
      <>
        <div className="flex items-center justify-between">
          <button className="bg-second px-5 py-2 rounded-md" onClick={() => setIsOpenModalEdit(true)}>
            <Image src={editIcon} alt="Icone de uma lixeira"/>
          </button>
          <button className="bg-second px-5 py-2 rounded-md" onClick={() => setIsModalOpen(true)}>
            <Image src={trashIcon} alt="Icone de um lapis"/>
          </button>
        </div>
        <ModalAdminConfirmDelete isModalOpen={isModalOpen} setIsModaOpen={setIsModalOpen} productId={productId}/>
        <ProductAdminModalEdit isOpenModalEdit={isOpenModalEdit} setIsOpenModalEdit={setIsOpenModalEdit}/>
      </>
    )
}