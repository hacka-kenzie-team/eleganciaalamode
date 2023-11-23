import Image from "next/image"
import { SearchInput } from "../_fragments/Inputs"
import { HomeCategoryButton } from "../_fragments/buttons/HomeCategoryButton"


export const HomeSection = () => {
    return (
        <section className="max-w-[1400px] m-auto flex justify-between">
            <div className="relative">
                <Image
                    src={"/hero/studio-portrait-young-beautiful-couple-love.png"}
                    width={818}
                    height={1080}
                    alt="Imagem de pessoas em coleçao"
                    className="max-h-[80dvh] w-auto"
                />
                <Image
                    src={"/hero/eleganciamodegradient.png"}
                    width={818}
                    height={1080}
                    alt="sombra para hero image"
                    className="absolute inset-0 w-auto h-full max-h-[80dvh]"
                />
            </div>
            <nav className="mx-auto flex flex-col justify-around min-h-full">
                <SearchInput />
                <HomeCategoryButton>Roupas</HomeCategoryButton>
                <HomeCategoryButton>Calcados</HomeCategoryButton>
                <HomeCategoryButton>Ternos</HomeCategoryButton>
                <HomeCategoryButton>Acessorios</HomeCategoryButton>
            </nav>
        </section>
    )
}