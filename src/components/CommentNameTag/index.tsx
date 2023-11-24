'use client'

import { ephesis } from "@/app/fonts"
import { IComment } from "@/contexts/@commentTypes"


export const CommentNameTag = ({ comment }: { comment: IComment }) => {

    return (
        <div className="flex gap-3 items-center justify-start border-2 border-red-900 group">
            <div className="min-w-[44px] bg-red-900/50 p-2 group-hover:bg-red-900 transition duration-500 ease-in-out delay-75">
                <span className={ephesis.className}>{comment.user_name.charAt(0)}</span>
            </div>
            <span>{comment.user_name}</span>
        </div>
    )
}