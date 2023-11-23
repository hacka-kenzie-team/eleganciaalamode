import { ProductsHome } from "@/components/ProductsHome";
import { getProducts } from "../data";

const allProducts = await getProducts();

export default function ProductsPage() {
  return (
    <main>
      <ProductsHome allProducts={allProducts}/>
    </main>
  )
}