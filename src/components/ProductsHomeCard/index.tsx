import Image from "next/image"
import placeholder from "../../../public/next.svg"
import { BuyButton, CategoryButton, ComentaryButton, RatingButton } from "../_fragments/Buttons"

export const ProductsHomeCard = () => {
  return (
    <li>
      <Image
        src={placeholder}
        width={900}
        height={400}
        alt="Imagem do produto"
      />
      <div>
        <div>
          <div>
            <h1>Nome do Produto</h1>
            <span>Descrição</span>
            <p>
              descrição:There are many variations of passages
              of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by injected humour, or randomised
              words which don't look even slightly believable. If you are
            </p>
          </div>
          <div>
            <h1>R$ 999,99</h1>
            <p>Estoque:</p>
            <p>x10</p>
          </div>
        </div>
        <div>
          <CategoryButton>NOME DA CATEGORIA</CategoryButton>
          <RatingButton>8</RatingButton>
          <ComentaryButton>2</ComentaryButton>
          <BuyButton />
        </div>
      </div>
    </li>
  )
}