'use client'

import { 
    BuyIcon,
    CommentaryIcon,
    RatingIcon,
} from "./Icons";
import { CategoryButton } from "./buttons/CategoryButton";

interface IProductHomeCardInfoProps{
    productId: number;
}

export const ProductHomeCardInfo = ({productId}: IProductHomeCardInfoProps) => {
    return (
        <div>
          <CategoryButton>product.category</CategoryButton>
          <RatingIcon>getAverageScore(product.comments)</RatingIcon>
          <CommentaryIcon>product.comments.length</CommentaryIcon>
          <BuyIcon />
        </div>
    )
}
