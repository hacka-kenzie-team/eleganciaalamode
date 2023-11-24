import { ProductsHome } from "@/components/ProductsHome";
import { getProducts } from "../data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const allProducts = await getProducts();

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 text-second">
        <ProductsHome allProducts={allProducts}/>
      </main>
      <Footer />
    </>
  )
}