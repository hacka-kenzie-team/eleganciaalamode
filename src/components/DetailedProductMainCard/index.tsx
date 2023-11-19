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
    <section>
      {
        !product ?
          <p>Produto não encontrado</p> :
          (<>
            <div>
              <div>
                <h1>{product.name}</h1>
                <span>Descrição</span>
                <p>
                  {product.description}
                </p>
                <div>
                  <span>Estoque</span><span> X {product.stock}</span>
                </div>
                <span>R$: {product.price}</span>
              </div>
              <Image
                src={product.style.url}
                height={550}
                width={330}
                alt="Imagem detalhada do Item a venda"
              />
            </div>
            <div>
              <CategoryButton>{product.category}</CategoryButton>
              <RatingIcon>{getAverageScore(product.comments)}</RatingIcon>
              <button type="button" onClick={() => addItem(product)}>
                <BuyIcon />
              </button>
            </div>
          </>
          )
      }
    </section>
  )
}