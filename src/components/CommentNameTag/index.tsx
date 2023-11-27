'use client'

import Image from "next/image"
import placeholder from "../../../public/vercel.svg"
import { IComment } from "@/contexts/@commentTypes"
import userImageProfile from "@/assets/icons/userImageProfile.svg"


export const CommentNameTag = ({ comment }: { comment: IComment }) => {

    return (
        <div className="flex items-center gap-2">
            <Image
                src={userImageProfile}
                height={30}
                width={30}
                alt="User picture"
            />
            <span>{comment.user_name}</span>
        </div>
    )
}