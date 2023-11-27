'use client'
import Image from "next/image"
import { CategoryButton } from "../_fragments/buttons/CategoryButton"
import { BuyIcon, RatingIcon } from "../_fragments/Icons"
import { productStore } from "@/contexts/productStore"
import { getAverageScore } from "@/utils/getAverageScore"
import { shoppingStore } from "@/contexts/shoppingStore"


export const DetailedProductMainCard = ({ productName }: { productName: string }) => {
  const { productList } = productStore((state) => state);
  const addItem = shoppingStore((state) => state.addItem);
  const product = productList.find((product) => product.slug === productName);

  return (
    <section className="flex justify-center items-center flex-col">
      {
        !product ?
          <p>Produto não encontrado</p> :
          (<>
            <div className="flex flex-col-reverse justify-center items-center lg:flex-row lg:gap-8">
              <div className="flex flex-col items-center gap-5 pt-3 lg:max-w-[500px]">
                <h1 className="text-xl">{product.name}</h1>
                <p className="font-inter">
                  {product.description}
                </p>
                <div className="flex justify-between w-full">
                  <div>
                    <span>em estoque:</span><span> {product.stock}</span>
                  </div>
                  <span>R$ {product.price}</span>
                </div>
              </div>
              <Image
                src={product.style.url}
                height={550}
                width={330}
                alt="Imagem detalhada do Item a venda"
                className="lg:w-[500px] lg:h-[300px] rounded-md"
              />
            </div>
            <div className="flex justify-between w-full pt-2 lg:pt-8">
              <div className="items-center gap-5 hidden sm:flex">
                <CategoryButton>{product.category}</CategoryButton>
                <RatingIcon>{getAverageScore(product.comments)}</RatingIcon>
              </div>
              <button type="button" onClick={() => addItem(product)} className="md:scale-105 transition-all">
                <BuyIcon />
              </button>
            </div>
          </>
          )
      }
    </section>
  )
}