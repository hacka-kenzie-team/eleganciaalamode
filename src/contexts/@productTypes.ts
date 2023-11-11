import { IComment } from "./@commentTypes";

export interface IProduct {
        id: number,
        name: string;
        slug: string;
        price: number;
        stock: number;
        category: string, //marcar opções depois
        visit_number: number;
        collection: string; //marcar opções depois
        sale: boolean;
        spotlight: boolean;
        keyword: string[];
        style: {
            url: string;
        };
        comments: IComment[];
        rating: number;
}

export interface IProductState {
    productList: IProduct[];
    loadProducts: () => Promise<IProduct[] | null>;
}