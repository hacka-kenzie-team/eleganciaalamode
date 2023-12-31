"use client"

import Image from "next/image"
import { DefaultButton } from "../buttons/DefaultButton"
import facebook from "@/assets/icons/facebook.svg"
import instagram from "@/assets/icons/Instagram.svg"
import twitter from "@/assets/icons/twitter.svg"
import youtube from "@/assets/icons/youtube.svg"
import linkedin from "@/assets/icons/linkedin.svg"
import { useState } from "react"
import { FooterModalInscrevaSe } from "@/components/FooterModalInscrevaSe"

export const SocialMidia = () => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

    return (
        <div className=" flex flex-col gap-5">
            <h3 className="text-2xl">Mídias Sociais</h3>
            <div>
                <ul className="flex items-center justify-between gap-1">
                    <li><Image src={facebook} alt="ícone do facebook"/></li>
                    <li><Image src={instagram} alt="ícone do instagram"/></li>
                    <li><Image src={twitter} alt="ícone do twitter"/></li>
                    <li><Image src={youtube} alt="ícone do youtube"/></li>
                    <li><Image src={linkedin} alt="ícone do linkedin"/></li>
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