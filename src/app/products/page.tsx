import { ProductsHome } from "@/components/ProductsHome";
import { getProducts } from "../data";

const allProducts = await getProducts();

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Produtos</h1>
      <ProductsHome allProducts={allProducts}/>
    </main>
  )
}