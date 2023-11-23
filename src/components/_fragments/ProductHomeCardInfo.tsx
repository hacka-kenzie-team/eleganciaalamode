'use client'

import { productStore } from "@/contexts/productStore";
import {
  BuyIcon,
  CommentaryIcon,
  RatingIcon,
} from "./Icons";
import { CategoryButton } from "./buttons/CategoryButton";
import { getAverageScore } from "@/utils/getAverageScore";
import { shoppingStore } from "@/contexts/shoppingStore";


interface IProductHomeCardInfoProps {
  productId: number;
}

export const ProductHomeCardInfo = ({ productId }: IProductHomeCardInfoProps) => {
  const { productList } = productStore((state) => state);
  const product = productList.find((product) => product.id === productId);
  const { addItem } = shoppingStore((state) => state)

  return (
    <div className="flex flex-col justify-around pt-2">
      <div className="flex justify-around">
        <CategoryButton>{product?.category}</CategoryButton>
        <RatingIcon>{product && getAverageScore(product.comments)}</RatingIcon>
        <CommentaryIcon>{product?.comments.length}</CommentaryIcon>
      </div>
      <button type="button" onClick={() => product && addItem(product)}>
        <BuyIcon />
      </button>
    </div>
  )
}
