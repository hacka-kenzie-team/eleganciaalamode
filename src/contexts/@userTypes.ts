import { Session } from "next-auth";
import { IComment } from "./@commentTypes";

export interface IOrderItemCreate{
    product_name: string;
    product_price: number;
    quantity: number;

    productId: number;
    quantityTotal: number;
}

export interface IOrderCreate{
    user_id: number;
    is_paid: boolean;
    items_bought: IOrderItemCreate[]
}

export interface IOrderItem{
    order: number;
    product_name: string;
    product_price: number;
    quantity: number;
}

export interface IOrder{
    id: number;
    user_id: number;
    is_paid: boolean;
    date_paid: null | Date;
    items_bought: IOrderItem[]
}

export type TToken = {
    refresh: string;
    access: string;
}

export type TEmailExists = {
    email_exists: boolean;
}

export interface IUserCreate{
    username: string,
	email: string,
	name: string,
	password: string,
	is_superuser?: boolean
}

export interface IUser{
    id: number;
    name: string;
    username: string;
    email: string;
    password?: string;
    is_superuser: boolean;
    orders: IOrder[];
    comments: IComment[]
};

export interface IUserData{
    accessToken: string;
    user: IUser;
};

export interface IUserState {
    userData: IUserData | null;
    loading: boolean,
    error: string,
    message: string,
    logoutUser: () => void
    loginUser: ({ username, password }: {
        username: string;
        password: string;
    }) => Promise<true | undefined>
    googleLogin: (session: Session | null) => Promise<true | undefined>
    loadUser: () => Promise<void>
    registerUser: (userData:IUserCreate) => Promise<boolean | undefined>
    buy: ({ order }: {
        order: IOrderCreate;
    }) => Promise<IOrder | undefined>
}