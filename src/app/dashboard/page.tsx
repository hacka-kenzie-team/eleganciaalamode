import { DashboardComentaryList } from "@/components/DashboardComentaryList";
import { DashboardOrdersList } from "@/components/DashboardOrdersList";
import { SalesList } from "@/components/SalesList";


export default function DashboardPage() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>DashboardPage</h1>
        <DashboardComentaryList />
        <DashboardOrdersList />
        <SalesList />
      </main>
    )
  }
  