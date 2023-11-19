import Image from "next/image"

import { IProduct } from "@/contexts/@productTypes"
import { getAverageScore } from "@/utils/getAverageScore"
import { CategoryButton } from "../_fragments/buttons/CategoryButton"
import { BuyIcon, CommentaryIcon, RatingIcon } from "../_fragments/Icons"
import { ProductHomeCardInfo } from "../_fragments/ProductHomeCardInfo"
import { ProductHomeCardStock } from "../_fragments/ProductHomeCardStock"
import Link from "next/link"


interface IProductsHomeCardProps {
  product: IProduct
}

export const ProductsHomeCard = ({ product }: IProductsHomeCardProps) => {

  return (
    <li>
      <Link href={`/${product.slug}`}>
        <Image
          src={product.style.url}
          width={400}
          height={600}
          alt="Imagem do produto"
        />
      </Link>
      <div>
        <Link href={`/${product.slug}`}>
          <div>
            <div>
              <h1>{product.name}</h1>
              <span>Descrição: </span>
              <p>
                {product.description || "Generic description"}
              </p>
            </div>
            <ProductHomeCardStock productId={product.id} />
          </div>
        </Link>
        <ProductHomeCardInfo productId={product.id} />
      </div>
    </li>
  )
}