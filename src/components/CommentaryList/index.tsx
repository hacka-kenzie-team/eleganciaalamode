
import { CommentaryCard } from "../CommentaryCard"
import { CommentaryIcon } from "../_fragments/Icons"


export const CommentaryList = ({productName}:{productName: string}) => {
    return (
        <section>
            <CommentaryIcon>2 Deixe sua Avaliação</CommentaryIcon>
            <ul>
                {/* <CommentaryCard />
                <CommentaryCard /> */}
            </ul>
        </section>
    )
}