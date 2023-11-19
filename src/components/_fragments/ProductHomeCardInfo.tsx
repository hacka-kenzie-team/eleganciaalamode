'use client'

import { productStore } from "@/contexts/productStore";
import { 
    BuyIcon,
    CommentaryIcon,
    RatingIcon,
} from "./Icons";
import { CategoryButton } from "./buttons/CategoryButton";
import { getAverageScore } from "@/utils/getAverageScore";


interface IProductHomeCardInfoProps{
    productId: number;
}

export const ProductHomeCardInfo = ({productId}: IProductHomeCardInfoProps) => {
    const {productList} = productStore((state) => state);
    const product = productList.find((product) => product.id === productId);

    return (
        <div>
          <CategoryButton>{product?.category}</CategoryButton>
          <RatingIcon>{product && getAverageScore(product.comments)}</RatingIcon>
          <CommentaryIcon>{product?.comments.length}</CommentaryIcon>
          <BuyIcon />
        </div>
    )
}
