import Image from "next/image"
import placeholder from "../../../public/next.svg"


export const CategoryButton = ({children}: {children: React.ReactNode}) => {
    return (
        <button>
            {children}
        </button>
    )
}

export const RatingButton = () => {
    return (
        <button>
            <Image
                src={placeholder}
                height={30}
                width={30}
                alt="Ícone de Estrela"
            />
            <span>8</span>
        </button>
    )
}

export const ComentaryButton = () => {
    return (
        <button>
            <Image
                src={placeholder}
                height={30}
                width={30}
                alt="Ícone de comentário"
            />
            <span>2</span>
        </button>
    )
}

export const AddButton = () => {
    return (
        <button>
            <Image
                src={placeholder}
                height={30}
                width={30}
                alt="Ícone de adicionar"
            />
            <span>comprar</span>
        </button>
    )
}