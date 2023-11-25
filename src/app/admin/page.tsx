import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { ProductsAdmin } from "@/components/ProductsAdmin"


export default function AdminPage() {
    return (
        <>
            <Header />
            <main className="flex min-h-screen flex-col items-center justify-between p-24 text-second">
                <ProductsAdmin />
            </main>
            <Footer />
        </>
    )
}