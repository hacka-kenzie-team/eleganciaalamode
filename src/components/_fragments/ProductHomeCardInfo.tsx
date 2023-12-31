'use client'

import { productStore } from "@/contexts/productStore";
import { 
    BuyIcon,
    CommentaryIcon,
    RatingIcon,
} from "./Icons";
import { getAverageScore } from "@/utils/getAverageScore";
import { shoppingStore } from "@/contexts/shoppingStore";


interface IProductHomeCardInfoProps{
    productId: number;
}

export const ProductHomeCardInfo = ({productId}: IProductHomeCardInfoProps) => {
    const { productList } = productStore((state) => state);
    const product = productList.find((product) => product.id === productId);
    const { addItem } = shoppingStore((state)=> state)

    return (
      <>
        {/* <CategoryButton>{product?.category}</CategoryButton> */}
        <div className="flex items-center justify-between">
          <RatingIcon>{product && getAverageScore(product.comments)}</RatingIcon>
          <CommentaryIcon>{product?.comments.length}</CommentaryIcon>
          <button type="button" onClick={() => {product && addItem(product)}} >
            <BuyIcon />
          </button>
        </div>
      </>
    )
}
