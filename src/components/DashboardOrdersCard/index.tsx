'use client'

import { IOrder } from "@/contexts/@userTypes"
import { getTotalFromOrder } from "@/utils/getTotalFromOrder"


export const DashboardOrdersCard = ({order}:{order: IOrder}) => {
    return (
        <li>
            <span>{String(order.date_paid)}</span>
            <span>R$: {getTotalFromOrder(order.items_bought)}</span>
        </li>
    )
}