import { CommentaryList } from "@/components/CommentaryList";
import { CommentaryModal } from "@/components/CommentaryModal";
import { DetailedProductMainCard } from "@/components/DetailedProductMainCard";
import { DetailedProductSearchList } from "@/components/DetailedProductSearchList";
import { SalesList } from "@/components/SalesList";


interface IDetailedProductMainCardProps {
  params: {
    productName: string
  }
}

export default function DetailedProductPage({ params }: IDetailedProductMainCardProps) {
  return (
    <main className="flex flex-col container max-w-[1400px] m-auto">
      <div className="flex justify-between">
        <DetailedProductMainCard productName={params.productName} />
        <CommentaryList productName={params.productName} />
      </div>
      <div className="flex justify-between">
        <SalesList />
        <DetailedProductSearchList />
      </div>
      <CommentaryModal />
    </main>
  )
};
