'use client'
import { AdminAddProducts } from "@/components/AdminAddProducts"
import { AdminCategories } from "@/components/AdminCategories"
import { AdminCollections } from "@/components/AdminCollections"
import { AdminProducts } from "@/components/AdminProducts"
import { AdminSales } from "@/components/AdminSales"
import { AdminStock } from "@/components/AdminStock"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { ProductModalEditAdmin } from "@/components/ProductModalEditAdmin"
import { ModalAdminConfirmDelete } from "@/components/_fragments/ModalAdminConfirmDelete"
import { adminStore } from "@/contexts/adminStore"
import { productStore } from "@/contexts/productStore"
import { userStore } from "@/contexts/userStore"
import { redirect } from "next/navigation"


export default function AdminPage() {
    const admin = userStore((state) => state.userData?.user.is_superuser)
    const user = userStore((state) => state.userData?.user);
    const { activeAdminList, setActiveAdminlist } = adminStore((state) => state)
    const setActiveProduct = productStore((state) => state.setActiveProduct)
    if (!admin) {
        redirect('/login');
    }

    const handleAddProductClick = () => {
        setActiveAdminlist("add")
        setActiveProduct(null)
    }

    return (
        <>
            <Header />
            <main className="flex min-h-screen flex-col items-center justify-between p-24 text-second">
                <p>BEM VINDO {user?.name}</p>
                    <p>Selecione sua lista</p>
                <nav className="w-full justify-between items-center hidden lg:flex">
                    <button onClick={() => handleAddProductClick()}>Adicionar novo produto</button>
                    <button onClick={() => setActiveAdminlist("all")}>Todos</button>
                    <button onClick={() => setActiveAdminlist("sale")}>Promoções</button>
                    <button onClick={() => setActiveAdminlist("stock")}>Controle de Estoque</button>
                    <button onClick={() => setActiveAdminlist("category")}>Categorias</button>
                    <button onClick={() => setActiveAdminlist("collections")}>Coleções</button>
                </nav>
                {activeAdminList === "add" && <AdminAddProducts />}
                {activeAdminList === "all" && <AdminProducts />}
                {activeAdminList === "sale" && <AdminSales />}
                {activeAdminList === "stock" && <AdminStock />}
                {activeAdminList === "category" && <AdminCategories />}
                {activeAdminList === "collections" && <AdminCollections />}
                <ProductModalEditAdmin />
                <ModalAdminConfirmDelete />
            </main>
            <Footer />
        </>
    )
}