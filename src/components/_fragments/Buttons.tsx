import Image from "next/image"
import placeholder from "../../../public/next.svg"


export const HomeCategoryButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <button type="button">
            {children}
        </button>
    )
}

export const FormSubmitButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <button type="submit">
            {children}
        </button>
    )
}

export const RatingButton = ({children}:{children: React.ReactNode}) => {
    return (
        <button type="button">
            <Image
                src={placeholder}
                height={30}
                width={30}
                alt="Ícone de Estrela"
            />
            <span>{children}</span>
        </button>
    )
}

export const CommentaryButton = ({children}:{children: React.ReactNode}) => {
    return (
        <button type="button">
            <Image
                src={placeholder}
                height={30}
                width={30}
                alt="Ícone de comentário"
            />
            <span>{children}</span>
        </button>
    )
}

export const AddButton = () => {
    return (
        <button type="button">
            <Image
                src={placeholder}
                height={30}
                width={30}
                alt="Ícone de adicionar"
            />
        </button>
    )
}

export const SubtractButton = () => {
    return (
        <button type="button">
            <Image
                src={placeholder}
                height={30}
                width={30}
                alt="Ícone de diminuir"
            />
        </button>
    )
}

export const BuyButton = () => {
    return (
        <div>
            <span>COMPRAR</span>
            <AddButton />
        </div>
    )
}

export const GoogleButton = () => {
    return (
        <button type="button">
            <Image
                src={placeholder}
                height={30}
                width={30}
                alt="Ícone do Google"
            />
        </button>
    )
}

export const FacebookButton = () => {
    return (
        <button type="button">
            <Image
                src={placeholder}
                height={30}
                width={30}
                alt="Ícone do facebook"
            />
        </button>
    )
}

export const AppleButton = () => {
    return (
        <button type="button">
            <Image
                src={placeholder}
                height={30}
                width={30}
                alt="Ícone da Apple"
            />
        </button>
    )
}
