'use client'
import { IComment } from "@/contexts/@commentTypes"
import { UserNameTag } from "../UserNameTag"
import { RatingButton } from "../_fragments/Buttons"
import { usePathname } from "next/navigation"
import { userStore } from "@/contexts/userStore"
import { CommentModerationButtons } from "../_fragments/buttons/CommentModerationButtons"


export const ComentaryCard = ({ comment }: { comment: IComment }) => {
    const admin = userStore((state) => state.userData?.user.is_superuser)
    const pathname = usePathname()

    return (
        <li>
            <UserNameTag />
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
                <RatingButton>{comment.rating}</RatingButton>
                {pathname === "/dashboard" || admin &&
                    <CommentModerationButtons commentId={comment.id} />
                }
            </div>
        </li>
    )
}