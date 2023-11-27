'use client'

import { userStore } from "@/contexts/userStore"
import { CommentaryCard } from "../CommentaryCard"
import { UserNameTag } from "../UserNameTag"


export const DashboardCommentaryList = () => {
    const user = userStore((state) => state.userData?.user)
    return (
        <section>
            <UserNameTag />
            <h1>Minhas Avaliações:</h1>
            <ul>
                {
                    user &&
                    (!user.comments ?
                    <li>Nenhum comentário feito ainda.</li> :
                    user.comments.map((comment) => 
                    <CommentaryCard 
                    comment={comment}
                    key={comment.id}
                    />))
                }
            </ul>
        </section>
    )
}