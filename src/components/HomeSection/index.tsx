import Image from "next/image"
import placeholder from "../../../public/vercel.svg"
import { SearchInput } from "../_fragments/Inputs"
import { HomeCategoryButton } from "../_fragments/buttons/HomeCategoryButton"



export const HomeSection = () => {
    return (
        <section>
            <Image 
                src={placeholder}
                width={1200}
                height={800}
                alt="Imagem de pessoas em coleçao"
            />
            <nav>
                <SearchInput />
                <HomeCategoryButton>roupas</HomeCategoryButton>
                <HomeCategoryButton>calcados</HomeCategoryButton>
                <HomeCategoryButton>acessorio</HomeCategoryButton>
                <HomeCategoryButton>ternos</HomeCategoryButton>
            </nav>
        </section>
    )
}