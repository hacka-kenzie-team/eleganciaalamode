'use client'

import { getAverageScore } from "@/utils/getAverageScore";
import { 
    BuyButton,
    CategoryButton,
    CommentaryButton,
    RatingButton
} from "./Buttons";

interface IProductHomeCardInfoProps{
    productId: number;
}

export const ProductHomeCardInfo = ({productId}: IProductHomeCardInfoProps) => {
    return (
        <div>
          <CategoryButton>product.category</CategoryButton>
          <RatingButton>getAverageScore(product.comments)</RatingButton>
          <CommentaryButton>product.comments.length</CommentaryButton>
          <BuyButton />
        </div>
    )
}