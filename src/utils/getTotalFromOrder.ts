import { IOrderItem } from "@/contexts/@userTypes";

export const getTotalFromOrder = (list:IOrderItem[] | undefined) => {
    if (list === undefined) {
        return 0
    } else {
        const total = list.reduce((a, c) => a + (c.product_price * c.quantity), 0)
        return total.toFixed(2)
    }
}