"use client"

import { SearchInput } from "../_fragments/Inputs"
import { CategoryButton } from "../_fragments/buttons/CategoryButton"
import { ProductModalAddAdmin } from "../ProductModalAddAdmin";
import { useState } from "react";
import { productStore } from "@/contexts/productStore";



export const ProductsAdmin = () => {

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const { productList } = productStore((state) => state);

    return(
        <section className="flex flex-col gap-9">
            <SearchInput />
            <ul className="w-full justify-between items-center hidden lg:flex">
                <li><CategoryButton>roupas</CategoryButton></li>
                <li><CategoryButton>calçados</CategoryButton></li>
                <li><CategoryButton>acessórios</CategoryButton></li>
                <li><CategoryButton>ternos</CategoryButton></li>
                <li>
                    <button type="button" onClick={() => setIsOpenModal(true)}>
                        <p className="border px-2 text-primary bg-second border-second rounded-md">+ ADICIONAR PRODUTO</p>
                    </button>
                </li>
            </ul>
            <ul className="flex flex-col justify-center gap-10 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-20">
                {/* {allProducts.map(
                    (product) => 
                    <ProductsAdminCard product={product} key={product.id}/>
                )} */}
            </ul>
            <ProductModalAddAdmin isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
        </section>
    )
}