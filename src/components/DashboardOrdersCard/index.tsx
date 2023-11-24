'use client'

import { IOrder } from "@/contexts/@userTypes"
import { getTotalFromOrder } from "@/utils/getTotalFromOrder"


export const DashboardOrdersCard = ({order}:{order: IOrder}) => {
    return (
        <li className="flex gap-8 bg-white/10 p-2 rounded-full">
            <span>{String(order.date_paid)}</span>
            <span>R$: {getTotalFromOrder(order.items_bought)}</span>
        </li>
    )
}