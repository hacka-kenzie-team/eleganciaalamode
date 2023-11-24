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
        <div className="flex gap-8">
            <button type="button"
                onClick={() => handleCommentManageClick("edit")}
            className="p-1 rounded-full bg-egray border-1 border-[#FFFFFF50] shadow-sm shadow-gray-400 hover:shadow-sm hover:shadow-gray-300">
                <Image
                    src={"/icons/edit-icon.svg"}
                    height={24}
                    width={24}
                    alt="Ícone de uma caneta"
                />
            </button>
            <button type="button"
                onClick={() => handleCommentManageClick("delete")}
                className="p-1 rounded-full bg-egray border-1 border-[#FFFFFF50] shadow-sm shadow-gray-400 hover:shadow-sm hover:shadow-gray-300">
                <Image
                    src={"/icons/bin.png"}
                    height={22}
                    width={22}
                    alt="Ícone de uma lata de lixo"
                />
            </button>
        </div>
    )
}