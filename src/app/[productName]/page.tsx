import { CommentaryList } from "@/components/CommentaryList";
import { CommentaryModal } from "@/components/CommentaryModal";
import { DetailedProductMainCard } from "@/components/DetailedProductMainCard";
import { DetailedProductSearchList } from "@/components/DetailedProductSearchList";
import { SalesList } from "@/components/SalesList";


interface IDetailedProductMainCardProps{
  params: {
      productName: string
  }
}

export default function DetailedProductPage({params}: IDetailedProductMainCardProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>DetailedProductPage</h1>
      <DetailedProductMainCard productName={params.productName}/>
      <DetailedProductSearchList />
      <CommentaryList productName={params.productName} />
      <SalesList />
      <CommentaryModal />
    </main>
  )
}
