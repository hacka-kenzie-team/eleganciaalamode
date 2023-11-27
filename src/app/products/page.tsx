import { ProductsHome } from "@/components/ProductsHome";
import { getProducts } from "../data";


const allProducts = await getProducts();

export default function ProductsPage() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 text-second">
        <ProductsHome allProducts={allProducts}/>
      </main>
    </>
  )
}