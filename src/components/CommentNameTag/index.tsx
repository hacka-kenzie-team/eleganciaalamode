'use client'

import Image from "next/image"
import { IComment } from "@/contexts/@commentTypes"


export const CommentNameTag = ({ comment }: { comment: IComment }) => {

    return (
        <div className="flex items-center gap-2">
            <Image
                src="/icons/userImageProfile.svg"
                height={30}
                width={30}
                alt="User picture"
            />
            <span>{comment.user_name}</span>
        </div>
    )
}