'use client'

import { userStore } from "@/contexts/userStore"
import { CommentaryCard } from "../CommentaryCard"
import { UserNameTag } from "../UserNameTag"


export const DashboardCommentaryList = () => {
    const user = userStore((state) => state.userData?.user)
    return (
        <section className="mb-6">
            <h1 className="pt-10 text-center">Bem vindo!</h1>
            <UserNameTag />
            <h1>Avaliações e comentários</h1>
            <ul className="flex flex-col gap-8 [width: min(600px, 100%)]">
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