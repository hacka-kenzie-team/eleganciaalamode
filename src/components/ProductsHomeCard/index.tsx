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
    <li className="w-full flex justify-between bg-red-900 items-center px-12 gap-7 rounded-[40px] border-2 border-[#FFFFFF50]">
      <Link href={`/${product.slug}`}
      className="flex-shrink-0 rounded-l-[20px] overflow-hidden">
        <Image
          src={product.style.url}
          width={712}
          height={400}
          alt="Imagem do produto"
        className="h-[80%] w-auto"/>
      </Link>
      <div className="p-4">
        <Link href={`/${product.slug}`}>
          <div>
            <div>
              <h1 className="h-[75px] flex flex-col justify-center text-2xl text-center mb-3 border-b-2 border-[#FFFFFF50]">{product.name}</h1>
              <p className="text-sm h-[100px] overflow-y-auto">
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