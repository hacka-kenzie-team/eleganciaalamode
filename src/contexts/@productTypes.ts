import { IComment } from "./@commentTypes";


export interface IKeyWord{
    entry: string;
}

export interface IProduct {
        id: number,
        name: string;
        slug: string;
        price: number;
        stock: number;
        description: string;
        category: string, //marcar opções depois
        visit_number: number;
        collection: string; //marcar opções depois
        sale: boolean;
        spotlight: boolean;
        keyword: IKeyWord[];
        style: {
            url: string;
        };
        comments: IComment[];
        rating: number;
}

export interface IProductState {
    productList: IProduct[];
    loading: boolean;
    error: string;
    message: string;
    searchInput: string;

    loadProducts: () => Promise<IProduct[] | null>;
    loadSearchedProducts: 
        (searchInput: string) => 
        Promise<IProduct[] | undefined>;
    setSearchInput: (string: string) => void
}