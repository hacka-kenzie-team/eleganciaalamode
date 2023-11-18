'use client'

import placeholder from "../../../../../public/vercel.svg"
import Image from "next/image"



export const CommentModerationButtons = ({ commentId }: { commentId: number }) => {
    //handleEditClick
    //handleDeleteClick

    return (
        <div>
            <button type="button">
                <Image
                    src={placeholder}
                    height={30}
                    width={30}
                    alt="Ícone de uma caneta"
                />
                <span>editar</span>
            </button>
            <button type="button">
                <Image
                    src={placeholder}
                    height={30}
                    width={30}
                    alt="Ícone de uma lata de lixo"
                />
                <span>excluir</span>
            </button>
        </div>
    )
}