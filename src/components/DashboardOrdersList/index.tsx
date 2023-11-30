'use client'
import { userStore } from "@/contexts/userStore"
import { DashboardOrdersCard } from "../DashboardOrdersCard"
import { IUser } from "@/contexts/@userTypes"


export const DashboardOrdersList = () => {
  const user = userStore((state) => state.userData?.user);

  return (
    <section className="w-full flex flex-col items-center justify-center pt-8">
      <h1 className="text-2xl">Histórico de compras:</h1>
      <ul>
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