'use client'
import { CommentaryModal } from "@/components/CommentaryModal";
import { DashboardCommentaryList } from "@/components/DashboardCommentaryList";
import { DashboardOrdersList } from "@/components/DashboardOrdersList";
import { SalesList } from "@/components/SalesList";
import { ModalUserConfirmDelete } from "@/components/_fragments/ModalUserConfirmDelete";
import { Hrs } from "@/components/_fragments/hr";
import { userStore } from "@/contexts/userStore";
import { redirect } from "next/navigation";



export default function DashboardPage() {
  const { userData } = userStore((state) => state)

  if (!userData) {
    redirect('/login')
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-5 text-second ">
        <DashboardCommentaryList />
        <Hrs />
        <DashboardOrdersList />
        <SalesList />
        <CommentaryModal />
        <ModalUserConfirmDelete />
      </main>
    </>
  )
}
