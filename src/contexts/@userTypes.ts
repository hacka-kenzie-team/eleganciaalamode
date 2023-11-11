import { IComment } from "./@commentTypes";


export interface IOrder{
    id: number;
    user?: string;
    is_paid: boolean;
    date_paid: null | Date;
    total_price: number | undefined;
    items_bought: ({
        product_name: string;
        product_price: number | undefined;
        quantity: number;
    }[] | undefined)[]
}

export interface IUser{
    id: number;
    name: string;
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