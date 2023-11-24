import { CommentaryList } from "@/components/CommentaryList";
import { CommentaryModal } from "@/components/CommentaryModal";
import { DetailedProductMainCard } from "@/components/DetailedProductMainCard";
import { DetailedProductSearchList } from "@/components/DetailedProductSearchList";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SalesList } from "@/components/SalesList";


interface IDetailedProductMainCardProps{
  params: {
      productName: string
  }
}

export default function DetailedProductPage({params}: IDetailedProductMainCardProps) {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-5 text-second lg:pl-20 lg:pr-20 lg:pt-20 gap-10">
        <DetailedProductMainCard productName={params.productName}/>
        {/* <DetailedProductSearchList /> */}
        <SalesList />
        <CommentaryList productName={params.productName} />
        <CommentaryModal />
      </main>
      <Footer />
    </>
  )
}
