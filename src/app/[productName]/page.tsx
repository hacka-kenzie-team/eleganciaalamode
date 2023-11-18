import { CommentaryList } from "@/components/CommentaryList";
import { CommentaryModal } from "@/components/CommentaryModal";
import { DetailedProductMainCard } from "@/components/DetailedProductMainCard";
import { DetailedProductSearchList } from "@/components/DetailedProductSearchList";
import { SalesList } from "@/components/SalesList";

export default function DetailedProductPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>DetailedProductPage</h1>
      <DetailedProductMainCard />
      <DetailedProductSearchList />
      <CommentaryList />
      <SalesList />

      {/* descomentar para ver o modal
      -----------------------------------------*/}

      {/* <CommentaryModal /> */}
    </main>
  )
}
