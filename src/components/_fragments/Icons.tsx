import Image from "next/image"
import placeholder from "../../../public/next.svg"
import { DefaultButton } from "./buttons/DefaultButton"
import likeIcon from "@/assets/icons/likeIcon.svg"
import iconAvaliabre from "@/assets/icons/icon-avaliabre.svg"


export const RatingIcon = ({children}:{children: React.ReactNode}) => {
    return (
        <div className="flex gap5 items-center gap-2">
            <Image
                src={likeIcon}
                height={20}
                width={20}
                alt="Ícone de Estrela"
            />
            <span>{children}</span>
        </div>
    )
}

export const CommentaryIcon = ({children}:{children: React.ReactNode}) => {
    return (
        <div className="flex gap-2 items-center">
            <Image
                src={iconAvaliabre}
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
        <DefaultButton>
            <span>comprar</span>
        </DefaultButton>
    )
}

export const GoogleIcon = () => {
    return (
        <div>
            <Image
                src="/icons/google.svg"
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