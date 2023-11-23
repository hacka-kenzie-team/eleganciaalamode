import Link from "next/link"
import Image from "next/image"
import acessorio from "../../../../../public/category/acessorios.png"
import calcados from "../../../../../public/category/calçados.png"
import roupas from "../../../../../public/category/roupas.png"
import ternos from "../../../../../public/category/ternos.png"


export const HomeCategoryButton = ({ children }: { children: React.ReactNode }) => {
    const category = String(children)
    let categoryBackground
    switch (category) {
        case "Acessorios":
            categoryBackground = acessorio;
            break;
        case "Calcados":
            categoryBackground = calcados;
            break;
        case "Roupas":
            categoryBackground = roupas;
            break;
        case "Ternos":
            categoryBackground = ternos;
            break;
        default:
            categoryBackground = acessorio;
    }

    return (
        <Link href={`/products/${children}`}>
            <div
            className={`w-[600px] h-[160px] rounded-sm group relative`}>
                <Image
                src={categoryBackground}
                height={160}
                width={600}
                alt="Imagem com um dos itens da categoria"
                className="absolute inset-0 h-full w-auto object-cover z-[-1]"
                />
                <button className="bg-red-900 w-4/5 h-full transition-all duration-500 ease-in-out group-hover:w-1/2"
                    type="button">
                    {children}
                </button>
            </div>
        </Link>
    )
}