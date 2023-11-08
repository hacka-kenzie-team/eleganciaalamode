
import { ComentaryCard } from "../ComentaryCard"
import { ComentaryButton } from "../_fragments/Buttons"

export const ComentaryList = () => {
    return (
        <section>
            <ComentaryButton>2 Deixe sua Avaliação</ComentaryButton>
            <ul>
                <ComentaryCard />
                <ComentaryCard />
            </ul>
        </section>
    )
}