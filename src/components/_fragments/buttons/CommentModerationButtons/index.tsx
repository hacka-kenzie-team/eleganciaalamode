'use client'

import { commentStore } from "@/contexts/commentStore"
import placeholder from "../../../../../public/vercel.svg"
import Image from "next/image"
import { IComment } from "@/contexts/@commentTypes"



export const CommentModerationButtons = ({ comment }: { comment: IComment }) => {
    const { commentaryModalToggle, setActiveComment } = commentStore((state)=> state)

    const handleCommentManageClick = (operation: "delete" | "edit") => {
        commentaryModalToggle(true, operation);
        setActiveComment(comment);
    }

    return (
        <div>
            <button type="button"
                onClick={() => handleCommentManageClick("edit")}
            >
                <Image
                    src={placeholder}
                    height={30}
                    width={30}
                    alt="Ícone de uma caneta"
                />
                <span>editar</span>
            </button>
            <button type="button"
                onClick={() => handleCommentManageClick("delete")}
            >
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