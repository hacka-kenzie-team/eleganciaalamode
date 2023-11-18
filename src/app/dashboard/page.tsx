'use client'
import { DashboardComentaryList } from "@/components/DashboardComentaryList";
import { DashboardOrdersList } from "@/components/DashboardOrdersList";
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>DashboardPage</h1>
      <DashboardComentaryList />
      <DashboardOrdersList />
      <SalesList />
    </main>
  )
}
