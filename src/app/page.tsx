import Image from "next/image";
import womanImage from "@/assets/imgs/retrato-jovem-mulher.png"
import { DefaultButton } from "@/components/_fragments/buttons/DefaultButton";
import threeSocialMan from "@/assets/imgs/3-homens-de-trerno.png"
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between bg-primary">
        <section className="flex flex-col-reverse items-center lg:flex-row">
          <div className="w-full lg:w-[49.6vw] h-[100vh] lg:h-[90vh] bg-[#D9D9D9] px-10 flex flex-col justify-center items-center gap-10 text-primary">
            <h1 className="text-5xl pb-7">Elegance in Fashion</h1>
            <p className="text-xl font-inter">
              Os materiais de alta qualidade e os cortes 
              impecáveis são marcas registradas da 
              ElegânciaÀLaMode, destacando-se
              pela atenção aos detalhes e pela busca 
              constante pela perfeição. 
            </p>
            <p className="text-xl font-inter">
              Além disso, a equipe de atendimento ao 
              cliente é treinada para oferecer 
              um serviço personalizado, auxiliando os 
              clientes na escolha das peças que 
              melhor se adequam ao seu estilo e ocasião.
            </p>
          </div>
          <div className="w-full lg:w-[49.6vw] h-[80vh] sm:h-[90vh] lg:h-[90vh] bg-third relative flex justify-center">
            <Image src={womanImage} alt="Imagem de uma mulher" className="absolute bottom-0" height={928}/>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row items-center justify-center p-10 gap-10 text-second">
          <div className="h-[400px] lg:h-[300px] flex flex-col justify-around items-center">
            <h3 className="text-2xl">o mais elegante do mercado</h3>
            <p className="font-inter">
              O estoque da ElegânciaÀLaMode 
              apresenta uma cuidadosa seleção de roupas 
              contemporâneas e atemporais, cuidadosamente 
              escolhidas para atender aos gostos refinados 
              de sua clientela.
            </p>
            <Link href={'/products/Acessorios'}><DefaultButton>Acessórios</DefaultButton></Link>
          </div>
          <div className="flex flex-col items-center justify-between gap-5">
            <h3 className="text-2xl">os melhores ternos do mercado</h3>
            <Image src={threeSocialMan} alt="três homens de ternos" className="rounded-md"/>
          </div>
          <div className="h-[400px] lg:h-[300px] flex flex-col justify-around items-center">
            <h3 className="text-2xl">calçados das melhores grifes</h3>
            <p className="font-inter">
              A ElegânciaÀLaMode não é apenas uma loja de roupas; é um destino para quem busca expressar sua individualidade através da moda com elegância e sofisticação.
            </p>
            <Link href={'/products/Calcados'}><DefaultButton>Calçados</DefaultButton></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
