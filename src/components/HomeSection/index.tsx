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
                <HomeCategoryButton>CATEGORIA 1</HomeCategoryButton>
                <HomeCategoryButton>CATEGORIA 2</HomeCategoryButton>
                <HomeCategoryButton>CATEGORIA 3</HomeCategoryButton>
                <HomeCategoryButton>CATEGORIA 4</HomeCategoryButton>
            </nav>
        </section>
    )
}