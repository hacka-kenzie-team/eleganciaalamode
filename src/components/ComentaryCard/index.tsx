import { UserNameTag } from "../UserNameTag"
import { RatingButton } from "../_fragments/Buttons"

export const ComentaryCard = () => {
    return (
        <li>
            <UserNameTag />
            <div>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply
                    random text. It has roots in a piece of
                </p>
                <RatingButton>10</RatingButton>
            </div>
        </li>
    )
}