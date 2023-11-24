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
        <li>
            <CommentNameTag comment={comment} />
            {
                pathname === "/dashboard" &&
                <div>
                    <span>{comment.product_name}</span>
                </div>
            }
            <div>
                <p className="bg-egray/80 p-3 rounded-lg mb-1 border-2 border-gray-200/30 hover:bg-egray transition ease-in-out duration-300">
                    {comment.content}
                </p>
                <div className="flex justify-around items-center">
                    <RatingIcon>{comment.rating}</RatingIcon>
                    {(pathname === "/dashboard" || admin) &&
                        <CommentModerationButtons comment={comment} />
                    }
                </div>
            </div>
        </li>
    )
}