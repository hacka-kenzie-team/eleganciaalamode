import Link from "next/link"
import Image from "next/image"


export const HomeCategoryButton = ({ children }: { children: React.ReactNode }) => {
    const category = String(children)
    let categoryBackground
    switch (category) {
        case "Acessorios":
            categoryBackground = "/category/acessorios.png";
            break;
        case "Calcados":
            categoryBackground = "/category/calçados.png";
            break;
        case "Roupas":
            categoryBackground = "/category/roupas.png";
            break;
        case "Ternos":
            categoryBackground = "/category/ternos.png";
            break;
        default:
            categoryBackground = "/category/ternos.png";
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