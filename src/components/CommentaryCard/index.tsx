'use client'
import { IComment } from "@/contexts/@commentTypes"
import { RatingIcon } from "../_fragments/Icons"
import { usePathname } from "next/navigation"
import { userStore } from "@/contexts/userStore"
import { CommentModerationButtons } from "../_fragments/buttons/CommentModerationButtons"
import { CommentNameTag } from "../CommentNameTag"
import Link from "next/link"
import { productStore } from "@/contexts/productStore"


export const CommentaryCard = ({ comment }: { comment: IComment }) => {
    const admin = userStore((state) => state.userData?.user.is_superuser)
    const productList = productStore((state) => state.productList)
    const pathname = usePathname()

    const productSlug = productList.find((product) => 
    product.name === comment.product_name)?.slug;

    return (
        <li className="mt-8">
            {
                pathname === "/dashboard" ?
                    <Link href={`/${productSlug}`}>
                        <div className="bg-red-900/75 w-fit my-2 py-1 px-8 rounded-full border-2 border-red-900 hover:bg-black transition ease-in-out duration-500">
                            <span>{comment.product_name}</span>
                        </div>
                    </Link>
                    :
                    <CommentNameTag comment={comment} />
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