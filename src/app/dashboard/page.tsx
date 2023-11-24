'use client'
import { CommentaryModal } from "@/components/CommentaryModal";
import { DashboardCommentaryList } from "@/components/DashboardCommentaryList";
import { DashboardOrdersList } from "@/components/DashboardOrdersList";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SalesList } from "@/components/SalesList";
import { userStore } from "@/contexts/userStore";
import { redirect } from "next/navigation";
import { useEffect } from "react";


export default function DashboardPage() {
  const { userData } = userStore((state) => state)

  useEffect(() => {
    if (!userData && window) {
      redirect('/login');
    }
  }, [userData]);

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>DashboardPage</h1>
        <DashboardCommentaryList />
        <DashboardOrdersList />
        <SalesList />
        <CommentaryModal />
      </main>
      <Footer />
    </>
  )
}
