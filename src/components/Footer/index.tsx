import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="h-[9dvh]">
            <div className="flex justify-between items-center container max-w-[1400px] h-full m-auto px-3">
                <p>All rights reserved, Kenzie 2023</p>
                <div className="flex flex-col gap-1">
                    <Link href={"/termsofservice"} className="text-sm">Termos de Serviço</Link>
                    <Link href={"/privacy"} className="text-sm">Política de privacidade</Link>
                </div>
            </div>
        </footer>
    )
}