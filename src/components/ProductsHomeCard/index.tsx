import Image from "next/image"

import { IProduct } from "@/contexts/@productTypes"
import { getAverageScore } from "@/utils/getAverageScore"
import { CategoryButton } from "../_fragments/buttons/CategoryButton"
import { BuyIcon, CommentaryIcon, RatingIcon } from "../_fragments/Icons"


interface IProductsHomeCardProps{
  product: IProduct
}

export const ProductsHomeCard = ({product}: IProductsHomeCardProps) => {

  return (
    <li>
      <Image
        src={product.style.url}
        width={400}
        height={600}
        alt="Imagem do produto"
      />
      <div>
        <div>
          <div>
            <h1>{product.name}</h1>
            <span>Descrição: </span>
            <p>
              {product.description || "Generic description"}
            </p>
          </div>
          <div>
            <h1>{product.price}</h1>
            <p>Estoque:</p>
            <p>x{product.stock}</p>
          </div>
        </div>
        <div>
          <CategoryButton>{product.category}</CategoryButton>
          <RatingIcon>{getAverageScore(product.comments)}</RatingIcon>
          <CommentaryIcon>{product.comments.length}</CommentaryIcon>
          <BuyIcon />
        </div>
      </div>
    </li>
  )
}