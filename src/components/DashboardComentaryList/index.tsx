import { ComentaryCard } from "../ComentaryCard"
import { UserNameTag } from "../UserNameTag"

export const DashboardComentaryList = () => {
    return (
        <section>
            <UserNameTag />
            <h1>Minhas Avaliações</h1>
            <ul>
                <ComentaryCard />
                <ComentaryCard />
                <ComentaryCard />
            </ul>
        </section>
    )
}