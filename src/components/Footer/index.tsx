'use client'
import { usePathname } from "next/navigation";
import { Hrs } from "../_fragments/hr"
import { SocialMidia } from "../_fragments/socialMidia"

export const Footer = () => {
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
            {displayHeader() &&
                <>
                    <Hrs />
                    <footer className="bg-primary h-[350px] flex-col items-center justify-center lg:justify-between flex px-3 lg:px-0 pt-10">
                        <div className="items-center justify-between lg:mx-10 text-second hidden lg:flex lg:w-full lg:px-10">
                            <div className=" flex flex-col gap-5">
                                <h3 className="text-2xl">Conteúdo</h3>
                                <nav>
                                    <ul className="flex flex-col gap-3 underline decoration-1">
                                        <li>
                                            <a href="">conteúdo</a>
                                        </li>
                                        <li>
                                            <a href="">O conteúdo mais popular</a>
                                        </li>
                                        <li>
                                            <a href="">Tendências de pesquisa</a>
                                        </li>
                                        <li>
                                            <a href="">Blog</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className=" flex flex-col gap-5">
                                <h3 className="text-2xl">Informações</h3>
                                <nav>
                                    <ul className="flex flex-col gap-3 underline decoration-1">
                                        <li>
                                            <a href="">Preços</a>
                                        </li>
                                        <li>
                                            <a href="">Sobre nós</a>
                                        </li>
                                        <li>
                                            <a href="">Sala de imprensa</a>
                                        </li>
                                        <li>
                                            <a href="">Trabalhe conosco</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className=" flex flex-col gap-5">
                                <h3 className="text-2xl">Jurídico</h3>
                                <nav>
                                    <ul className="flex flex-col gap-3 underline decoration-1">
                                        <li>
                                            <a href="/termsofservice">Termos e condições</a>
                                        </li>
                                        <li>
                                            <a href="">Contrato de licença</a>
                                        </li>
                                        <li>
                                            <a href="/privacy">Política de privacidade</a>
                                        </li>
                                        <li>
                                            <a href="">Política de cookies</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="hidden lg:flex">
                                <SocialMidia />
                            </div>
                        </div>
                        <div className="w-full bg-third items-center justify-center hidden lg:flex">
                            <h3 className="text-white text-[18px]">Copyright © 2023 Kenzie Academy Brasil. Todos os direitos reservados.</h3>
                        </div>
                        <div className="flex items-center max-w-[400px] lg:hidden">
                            <SocialMidia />
                        </div>
                    </footer>
                </>
            }
        </>
    )
}