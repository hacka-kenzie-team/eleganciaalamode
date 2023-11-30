"use client"

import Image from "next/image"
import { DefaultButton } from "../buttons/DefaultButton"
import { useState } from "react"
import { FooterModalInscrevaSe } from "@/components/FooterModalInscrevaSe"

export const SocialMidia = () => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

    return (
        <div className=" flex flex-col gap-5">
            <h3 className="text-2xl">Mídias Sociais</h3>
            <div>
                <ul className="flex items-center justify-between gap-1">
                    <li className="relative w-8 h-8"><Image src="/icons/facebook.svg" alt="ícone do facebook" fill/></li>
                    <li className="relative w-8 h-8"><Image src="/icons/Instagram.svg" alt="ícone do instagram" fill/></li>
                    <li className="relative w-8 h-8"><Image src="/icons/twitter.svg" alt="ícone do twitter" fill/></li>
                    <li className="relative w-8 h-8"><Image src="/icons/youtube.svg" alt="ícone do youtube" fill/></li>
                    <li className="relative w-8 h-8"><Image src="/icons/linkedin.svg" alt="ícone do linkedin" fill/></li>
                </ul>
            </div>
            <p>Recursos exclusivos diretamente na sua caixa de entrada</p>
            <button className="flex items-center justify-center" onClick={() => setIsOpenModal(true)}>
                <DefaultButton>inscreva-se</DefaultButton>
            </button>
            <FooterModalInscrevaSe isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
        </div>
    )
}