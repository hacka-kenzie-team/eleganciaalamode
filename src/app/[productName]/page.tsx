import { ComentaryList } from "@/components/ComentaryList";
import { ComentaryModal } from "@/components/ComentaryModal";
import { DetailedProductMainCard } from "@/components/DetailedProductMainCard";
import { DetailedProductSearchList } from "@/components/DetailedProductSearchList";
import { SalesList } from "@/components/SalesList";

export default function DetailedProductPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>DetailedProductPage</h1>
      <DetailedProductMainCard />
      <DetailedProductSearchList />
      <ComentaryList />
      <SalesList />

      {/* descomentar para ver o modal
      -----------------------------------------*/}

      {/* <ComentaryModal /> */}
    </main>
  )
}
