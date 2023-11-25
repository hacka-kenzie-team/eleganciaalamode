'use client'
import { CommentaryModal } from "@/components/CommentaryModal";
import { DashboardCommentaryList } from "@/components/DashboardCommentaryList";
import { DashboardOrdersList } from "@/components/DashboardOrdersList";
import { SalesList } from "@/components/SalesList";
import { userStore } from "@/contexts/userStore";
import { redirect } from "next/navigation";


export default function DashboardPage() {
  const { userData } = userStore((state) => state)

  if (!userData) {
    redirect('/login');
  }

  return (
    <main className="min-h-[80dvh] max-w-[1400px] m-auto">
      <div className="flex justify-between flex-wrap">
        <DashboardCommentaryList />
        <DashboardOrdersList />
      </div>
      <SalesList />
      <CommentaryModal />
    </main>
  )
}
