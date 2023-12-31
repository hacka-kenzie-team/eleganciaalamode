"use client";
import { AdminAddProducts } from "@/components/AdminAddProducts";
import { AdminCategories } from "@/components/AdminCategories";
import { AdminCollections } from "@/components/AdminCollections";
import { AdminProducts } from "@/components/AdminProducts";
import { AdminSales } from "@/components/AdminSales";
import { AdminStock } from "@/components/AdminStock";
import { ProductModalEditAdmin } from "@/components/ProductModalEditAdmin";
import { ModalAdminConfirmDelete } from "@/components/_fragments/ModalAdminConfirmDelete";
import { adminStore } from "@/contexts/adminStore";
import { productStore } from "@/contexts/productStore";
import { userStore } from "@/contexts/userStore";
import { redirect } from "next/navigation";

export default function AdminPage() {
  const admin = userStore((state) => state.userData?.user.is_superuser);
  const user = userStore((state) => state.userData?.user);
  const { activeAdminList, setActiveAdminlist } = adminStore((state) => state);
  const setActiveProduct = productStore((state) => state.setActiveProduct);
  if (!admin) {
    redirect("/login");
  }

  const handleAddProductClick = () => {
    setActiveAdminlist("add");
    setActiveProduct(null);
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center gap-5 p-8 text-second">
        <p className="text-2xl">bem vindo, {user?.name}</p>
        <p>Selecione sua lista</p>
        <nav className="w-full justify-between items-center flex flex-col lg:flex-row gap-5">
          <button
            onClick={() => handleAddProductClick()}
            className="border border-second w-[90%] lg:w-auto lg:px-3 rounded-md hover:bg-second hover:text-primary md:hover:translate-y-px transition-all"
          >
            + adicionar novo produto
          </button>
          <button
            onClick={() => setActiveAdminlist("all")}
            className="border border-second w-[90%] lg:w-auto lg:px-5 rounded-md hover:bg-second hover:text-primary md:hover:translate-y-px transition-all"
          >
            todos
          </button>
          <button
            onClick={() => setActiveAdminlist("sale")}
            className="border border-second w-[90%] lg:w-auto lg:px-5 rounded-md hover:bg-second hover:text-primary md:hover:translate-y-px transition-all"
          >
            promoções
          </button>
          <button
            onClick={() => setActiveAdminlist("stock")}
            className="border border-second w-[90%] lg:w-auto lg:px-5 rounded-md hover:bg-second hover:text-primary md:hover:translate-y-px transition-all"
          >
            controle de Estoque
          </button>
          <button
            onClick={() => setActiveAdminlist("category")}
            className="border border-second w-[90%] lg:w-auto lg:px-5 rounded-md hover:bg-second hover:text-primary md:hover:translate-y-px transition-all"
          >
            categorias
          </button>
          <button
            onClick={() => setActiveAdminlist("collections")}
            className="border border-second w-[90%] lg:w-auto lg:px-5 rounded-md hover:bg-second hover:text-primary md:hover:translate-y-px transition-all"
          >
            coleções
          </button>
        </nav>
        {activeAdminList === "add" && <AdminAddProducts />}
        {activeAdminList === "all" && <AdminProducts />}
        {activeAdminList === "sale" && <AdminSales />}
        {activeAdminList === "stock" && <AdminStock />}
        {activeAdminList === "category" && <AdminCategories />}
        {activeAdminList === "collections" && <AdminCollections />}
      </main>
      <ProductModalEditAdmin />
      <ModalAdminConfirmDelete />
    </>
  );
}
