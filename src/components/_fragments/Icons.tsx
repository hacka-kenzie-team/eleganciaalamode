import Image from "next/image"
import placeholder from "../../../public/next.svg"


export const RatingIcon = ({children}:{children: React.ReactNode}) => {
    return (
        <div>
            <Image
                src={placeholder}
                height={30}
                width={30}
                alt="Ícone de Estrela"
            />
            <span>{children}</span>
        </div>
    )
}

export const CommentaryIcon = ({children}:{children: React.ReactNode}) => {
    return (
        <div>
            <Image
                src={placeholder}
                height={30}
                width={30}
                alt="Ícone de comentário"
            />
            <span>{children}</span>
        </div>
    )
}

export const AddIcon = () => {
    return (
        <div>
            <Image
                src={placeholder}
                height={30}
                width={30}
                alt="Ícone de adicionar"
            />
        </div>
    )
}

export const SubtractIcon = () => {
    return (
        <div>
            <Image
                src={placeholder}
                height={30}
                width={30}
                alt="Ícone de diminuir"
            />
        </div>
    )
}

export const BuyIcon = () => {
    return (
        <div>
            <span>COMPRAR</span>
            <AddIcon />
        </div>
    )
}

export const GoogleIcon = () => {
    return (
        <div>
            <Image
                src={placeholder}
                height={30}
                width={30}
                alt="Ícone do Google"
            />
        </div>
    )
}

export const FacebookIcon = () => {
    return (
        <div>
            <Image
                src={placeholder}
                height={30}
                width={30}
                alt="Ícone do facebook"
            />
        </div>
    )
}

export const AppleIcon = () => {
    return (
        <div>
            <Image
                src={placeholder}
                height={30}
                width={30}
                alt="Ícone da Apple"
            />
        </div>
    )
}