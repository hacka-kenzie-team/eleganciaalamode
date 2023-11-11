//users é interligado 
//com oders 1 : N 
//com product through comments N : N

import { orders } from "./orders"
import { comments } from "./comments";
import { IUser } from "@/contexts/@userTypes";

export const users: IUser[] = [
    {
        id: 1,
        name: "Test",
        email: "test@test.com",
        password: "12345",
        is_superuser: false,
        orders: orders.filter((order) => order.user === "Test"),
        comments: comments.filter((comment) => comment.user_name === "Test"),
    },
    {
        id: 2,
        name: "Kenzie",
        email: "kenzie@test.com",
        password: "12345",
        is_superuser: false,
        orders: orders.filter((order) => order.user === "Kenzie"),
        comments: comments.filter((comment) => comment.user_name === "Kenzie"),
    },
    {
        id: 3,
        name: "Fernanda",
        email: "Fernanda@test.com",
        password: "12345",
        is_superuser: false,
        orders: orders.filter((order) => order.user === "Fernanda"),
        comments: comments.filter((comment) => comment.user_name === "Fernanda"),
    },
    {
        id: 4,
        name: "Monica",
        email: "monica@test.com",
        password: "12345",
        is_superuser: false,
        orders: orders.filter((order) => order.user === "Monica"),
        comments: comments.filter((comment) => comment.user_name === "Monica"),
    },
    {
        id: 5,
        name: "Mauricio",
        email: "mauricio@test.com",
        password: "12345",
        is_superuser: false,
        orders: orders.filter((order) => order.user === "Mauricio"),
        comments: comments.filter((comment) => comment.user_name === "Mauricio"),
    },
    {
        id: 6,
        name: "Rafael",
        email: "rafael@test.com",
        password: "12345",
        is_superuser: false,
        orders: orders.filter((order) => order.user === "Rafael"),
        comments: comments.filter((comment) => comment.user_name === "Rafael"),
    },
    {
        id: 7,
        name: "Luana",
        email: "luana@test.com",
        password: "12345",
        is_superuser: false,
        orders: orders.filter((order) => order.user === "Luana"),
        comments: comments.filter((comment) => comment.user_name === "Luana"),
    },
]
