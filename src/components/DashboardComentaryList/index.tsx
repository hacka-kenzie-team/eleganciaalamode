'use client'

import { userStore } from "@/contexts/userStore"
import { ComentaryCard } from "../ComentaryCard"
import { UserNameTag } from "../UserNameTag"
import { IUser } from "@/contexts/@userTypes"

export const DashboardComentaryList = () => {
    const user = userStore((state) => state.userData?.user)
    return (
        <section>
            <UserNameTag />
            <h1>Minhas Avaliações</h1>
            <ul>
                {
                    user &&
                    (!user.comments ?
                    <li>Nenhum comentário feito ainda.</li> :
                    user.comments.map((comment) => 
                    <ComentaryCard 
                    comment={comment}
                    key={comment.id}
                    />))
                }
            </ul>
        </section>
    )
}