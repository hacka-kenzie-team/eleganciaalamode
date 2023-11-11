// orders ligado á order_items 1 : 1

import { IOrder } from "@/contexts/@userTypes";
import { order_items } from "./order_items"


export const orders = [
    {
        id: 1,
        user: "Test",
        is_paid: true,
        date_paid: new Date("11/11/2023"),
        total_price: (order_items.map((item) => {
            if (item.order_id === 1) {
                return item.product_list.reduce((a, c) => a + (Number(c.product_price) * c.quantity), 0);
            }
        }))[0],
        items_bought: order_items.map((item) => {
            if (item.order_id === 1) {
                return item.product_list;
            }
        })
    },
    {
        id: 2,
        user: "Kenzie",
        is_paid: true,
        date_paid: new Date("07/10/2023"),
        total_price: (order_items.map((item) => {
            if (item.order_id === 2) {
                return item.product_list.reduce((a, c) => a + (Number(c.product_price) * c.quantity), 0);
            }
        }))[0],
        items_bought: order_items.map((item) => {
            if (item.order_id === 2) {
                return item.product_list;
            }
        })
    },
    {
        id: 3,
        user: "Monica",
        is_paid: true,
        date_paid: new Date("25/06/2023"),
        total_price: (order_items.map((item) => {
            if (item.order_id === 3) {
                return item.product_list.reduce((a, c) => a + (Number(c.product_price) * c.quantity), 0);
            }
        }))[0],
        items_bought: order_items.map((item) => {
            if (item.order_id === 3) {
                return item.product_list;
            }
        })
    },
    {
        id: 4,
        user: "Monica",
        is_paid: true,
        date_paid: new Date("08/09/2023"),
        total_price: (order_items.map((item) => {
            if (item.order_id === 4) {
                return item.product_list.reduce((a, c) => a + (Number(c.product_price) * c.quantity), 0);
            }
        }))[0],
        items_bought: order_items.map((item) => {
            if (item.order_id === 4) {
                return item.product_list;
            }
        })
    },
    {
        id: 5,
        user: "Mauricio",
        is_paid: true,
        date_paid: new Date("11/03/2023"),
        total_price: (order_items.map((item) => {
            if (item.order_id === 5) {
                return item.product_list.reduce((a, c) => a + (Number(c.product_price) * c.quantity), 0);
            }
        }))[0],
        items_bought: order_items.map((item) => {
            if (item.order_id === 5) {
                return item.product_list;
            }
        })
    },
    {
        id: 6,
        user: "Fernanda",
        is_paid: true,
        date_paid: new Date("22/10/2023"),
        total_price: (order_items.map((item) => {
            if (item.order_id === 6) {
                return item.product_list.reduce((a, c) => a + (Number(c.product_price) * c.quantity), 0);
            }
        }))[0],
        items_bought: order_items.map((item) => {
            if (item.order_id === 6) {
                return item.product_list;
            }
        })
    },
    {
        id: 7,
        user: "Luana",
        is_paid: true,
        date_paid: new Date("17/10/2023"),
        total_price: (order_items.map((item) => {
            if (item.order_id === 7) {
                return item.product_list.reduce((a, c) => a + (Number(c.product_price) * c.quantity), 0);
            }
        }))[0],
        items_bought: order_items.map((item) => {
            if (item.order_id === 7) {
                return item.product_list;
            }
        })
    },
]