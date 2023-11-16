'use client'

import { getAverageScore } from "@/utils/getAverageScore";
import { 
    BuyButton,
    CategoryButton,
    ComentaryButton,
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
          <ComentaryButton>product.comments.length</ComentaryButton>
          <BuyButton />
        </div>
    )
}