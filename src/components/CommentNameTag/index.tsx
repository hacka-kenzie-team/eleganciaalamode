'use client'

import Image from "next/image"
import placeholder from "../../../public/vercel.svg"
import { IComment } from "@/contexts/@commentTypes"


export const CommentNameTag = ({ comment }: { comment: IComment }) => {

    return (
        <div>
            <div>
            <Image
            src={placeholder}
            height={70}
            width={70}
            alt="User picture"
            />
            </div>
            <span>{comment.user_name}</span>
        </div>
    )
}