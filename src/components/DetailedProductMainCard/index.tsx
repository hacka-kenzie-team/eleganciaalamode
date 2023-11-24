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
          <p className="w-full h-full">Produto não encontrado</p> :
          (<>
            <div className="flex p-5">
              <div className="flex flex-col justify-between p-4">
                <h1 className="text-[26px] border-b-2 border-[#FFFFFF50] text-center">{product.name}</h1>
                <p className="border-2 border-red-900 p-4">
                  {product.description}
                </p>
                <div>
                  <div className="flex flex-col gap-5">
                    <div>
                      <span>Estoque</span><span> X {product.stock}</span>{product && (product.stock < 10) &&
                        <span className="text-red-900 text-sm p-2 border-2 border-red-900 rounded-[40px] text-center bg-black ml-[40px]">
                          {product.stock < 1 ? "Fora de Estoque" : "Poucas unidades"}
                        </span>}
                    </div>
                    <span>Preço: R$ {product.price}</span>
                  </div>
                  <div className="flex justify-around items-center pt-6">
                    <CategoryButton>{product.category}</CategoryButton>
                    <RatingIcon>{getAverageScore(product.comments)}</RatingIcon>
                    <button type="button" onClick={() => addItem(product)}>
                      <BuyIcon />
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative min-w-[290px] min-h-[720px]">
                <div className="absolute top-0 right-0 overflow-hidden w-[290px] min-h-[720px] transition-all duration-500 ease-in-out hover:w-[900px]">
                  <Image
                    src={product.style.url}
                    height={1280}
                    width={720}
                    alt="Imagem detalhada do Item a venda"
                    style={{ objectFit: "cover" }}
                    className="h-[720px] w-auto flex-shrink-0"
                  />
                </div>
              </div>
            </div>
          </>
          )
      }
    </section>
  )
}