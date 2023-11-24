import Image from "next/image"
import placeholder from "../../../public/next.svg"


export const RatingIcon = ({children}:{children: React.ReactNode}) => {
    return (
        <div className="w-fit bg-egray rounded-full flex gap-2 px-2 items-center border-1 border-[#FFFFFF50] shadow-sm shadow-gray-400 hover:shadow-sm hover:shadow-gray-300">
            <Image
                src={"/icons/star.png"}
                height={26}
                width={26}
                alt="Ícone de Estrela"
            />
            <span>{children}</span>
        </div>
    )
}

export const CommentaryIcon = ({children}:{children: React.ReactNode}) => {
    return (
        <div className="w-fit bg-egray rounded-full flex gap-2 px-2 items-center border-1 border-[#FFFFFF50] shadow-sm shadow-gray-400 hover:shadow-sm hover:shadow-gray-300">
            <Image
                src={"/icons/comment.svg"}
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
                src={"/icons/add-icon.png"}
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
                src={"/icons/sub-icon.png"}
                height={30}
                width={30}
                alt="Ícone de diminuir"
            />
        </div>
    )
}

export const BuyIcon = () => {
    return (
        <div className="flex gap-3 items-center bg-black rounded-full w-fit px-3 py-1 ml-auto mt-2 shadow-sm shadow-gray-400 hover:shadow-sm hover:shadow-gray-300 hover:scale-110 ease-in-out duration-300">
            <span className="text-sm">COMPRAR</span>
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