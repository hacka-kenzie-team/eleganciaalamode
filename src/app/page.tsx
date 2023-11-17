import { HomeSection } from "@/components/HomeSection";
import { ShoppingCartModal } from "@/components/ShoppingCartModal";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
      <HomeSection />

      {/* descomentar para ver o modal, lugar final sera no Layout 
      para que fique ativo em todas as paginas
      -----------------------------------------*/}

      {/*<ShoppingCartModal /> */}
    </main>
  )
}
