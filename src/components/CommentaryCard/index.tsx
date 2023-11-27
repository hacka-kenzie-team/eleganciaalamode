'use client'
import { IComment } from "@/contexts/@commentTypes"
import { RatingIcon } from "../_fragments/Icons"
import { usePathname } from "next/navigation"
import { userStore } from "@/contexts/userStore"
import { CommentModerationButtons } from "../_fragments/buttons/CommentModerationButtons"
import { CommentNameTag } from "../CommentNameTag"


export const CommentaryCard = ({ comment }: { comment: IComment }) => {
    const admin = userStore((state) => state.userData?.user.is_superuser)
    const pathname = usePathname()

    return (
        <li className="flex flex-col gap-2 py-5">
            <CommentNameTag comment={comment}/>
            {
                pathname === "/dashboard" &&
                <div>
                    <span>{comment.product_name}</span>
                </div>
            }
            <div>
                <p>
                    {comment.content}
                </p>
                <RatingIcon>{comment.rating}</RatingIcon>
                {(pathname === "/dashboard" || admin) &&
                    <CommentModerationButtons comment={comment} />
                }
            </div>
        </li>
    )
}