'use client'
import { userStore } from "@/contexts/userStore"
import { DashboardOrdersCard } from "../DashboardOrdersCard"
import { IUser } from "@/contexts/@userTypes"


export const DashboardOrdersList = () => {
  const user = userStore((state) => state.userData?.user);

  return (
    <section className="flex flex-col items-center gap-3 mb-auto mt-10 bg-egray p-5 h-[60dvh] overflow-y-auto border-2 border-white/20">
      <h1 className="border-b-4 border-white/50 border-spacing-6">Histórico de compras</h1>
      <ul className="flex flex-col gap-4">
        {
          user &&
          (user.orders.length < 1 ?
            <li>Nenhuma compra registrada ainda.</li> :
            user.orders.map((order) =>
              <DashboardOrdersCard
                order={order}
                key={order.id} />
            ))
        }
      </ul>
    </section>
  )
}