import { IComment } from "./@commentTypes";

export interface IOrderItem{
    order: number;
    product_name: string;
    product_price?: number;
    quantity: number;
}

export interface IOrder{
    id: number;
    user_id: number;
    is_paid: boolean;
    date_paid: null | Date;
    items_bought: IOrderItem[]
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
    user_data: IUserData | null;
}