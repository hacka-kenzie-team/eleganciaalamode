import Image from "next/image"
import placeholder from "../../../public/vercel.svg"
import { CategoryButton } from "../_fragments/buttons/CategoryButton"
import { BuyIcon, RatingIcon } from "../_fragments/Icons"


export const DetailedProductMainCard = () => {
    return (
        <section>
            <div>
                <div>
                    <h1>NOME DO PRODUTO</h1>
                    <span>Descrição</span>
                    <p>
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form, by
                        injected humour, or randomised words which don't look even
                        slightly believable. If you are
                    </p>
                    <div>
                        <span>Estoque</span><span>X10</span>
                    </div>
                    <span>R$: 9999,99</span>
                </div>
                <Image
                    src={placeholder}
                    height={550}
                    width={330}
                    alt="Imagem detalhada do Item a venda"
                />
            </div>
            <div>
                <CategoryButton>NOME DA CATEGORIA</CategoryButton>
                <RatingIcon>8</RatingIcon>
                <BuyIcon />
            </div>
        </section>
    )
}