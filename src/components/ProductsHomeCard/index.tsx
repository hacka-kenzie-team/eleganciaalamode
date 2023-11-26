'use client'
import Image from "next/image"

import { IProduct } from "@/contexts/@productTypes"
import { getAverageScore } from "@/utils/getAverageScore"
import { CategoryButton } from "../_fragments/buttons/CategoryButton"
import { BuyIcon, CommentaryIcon, RatingIcon } from "../_fragments/Icons"
import { ProductHomeCardInfo } from "../_fragments/ProductHomeCardInfo"
import { ProductHomeCardStock } from "../_fragments/ProductHomeCardStock"
import Link from "next/link"
import { SkeletonProducts } from "../SkeletonProducts"
import { productStore } from "@/contexts/productStore"


interface IProductsHomeCardProps {
  product: IProduct
}

export const ProductsHomeCard = ({ product }: IProductsHomeCardProps) => {
  const loading = productStore((store) => store.loading)
  return (
    <>
    {loading ? 
      <SkeletonProducts /> :
      <li className="w-72 gap-2 flex flex-col justify-between">
      <Link href={`/${product.slug}`}>
        <Image
          src={product.style.url}
          width={400}
          height={600}
          alt="Imagem do produto"
          className="rounded-t-lg"
        />
      </Link>
      <div className="flex flex-col gap-2">
        <Link href={`/${product.slug}`}>
          <div>
            <div>
              <h1>{product.name}</h1>
              {/* <span>Descrição: </span>
              <p>
                {product.description || "Generic description"}
              </p> */}
            </div>
            <ProductHomeCardStock productId={product.id} />
          </div>
        </Link>
        <ProductHomeCardInfo productId={product.id} />
      </div>
    </li>
    }
    </>
  )
}