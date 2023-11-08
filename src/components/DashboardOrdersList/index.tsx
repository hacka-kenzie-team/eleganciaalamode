import { DashboardOrdersCard } from "../DashboardOrdersCard"

export const DashboardOrdersList = () => {
    return (
        <section>
            <h1>Histórico de compras</h1>
            <DashboardOrdersCard />
            <DashboardOrdersCard />
            <DashboardOrdersCard />
        </section>
    )
}