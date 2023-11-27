import { IComment } from "./@commentTypes";
import { IOrderItemCreate } from "./@userTypes";


export interface IKeyWord {
    entry: string;
}

export interface IProductCreate {
    name: string;
    slug: string;
    price: number;
    stock: number;
    category: "Roupas" | "Ternos" | "Acessorios" | "Calcados";
    visit_number: 0;
    collection: string;
    sale: boolean;
    spotlight: boolean;
    style: {
        url: string;
    };
    keywords: IKeyWord[];
}

export interface IProduct {
    id: number,
    name: string;
    slug: string;
    price: number;
    stock: number;
    description: string;
    category: "Roupas" | "Ternos" | "Acessorios" | "Calcados";
    visit_number: number;
    collection: string;
    sale: boolean;
    spotlight: boolean;
    keywords: IKeyWord[];
    style: {
        url: string;
    };
    comments: IComment[];
    rating: number;
}

export interface IProductEdit {
    name?: string;
    slug?: string;
    price?: number;
    stock?: number;
    description?: string;
    category?: "Roupas" | "Ternos" | "Acessorios" | "Calcados";
    visit_number?: number;
    collection?: string;
    sale?: boolean;
    spotlight?: boolean;
    keywords?: IKeyWord[];
    style?: {
        url: string;
    };
    comments?: IComment[];
    rating?: number;
}

export interface IProductState {
    productList: IProduct[];
    activeProduct: null | IProduct;
    loading: boolean;
    searchInput: string;

    setActiveProduct: (product: IProduct | null) => void;
    loadProducts: () => Promise<IProduct[] | null>;
    loadSearchedProducts:
    (searchInput: string) =>
        Promise<IProduct[] | undefined>;
    setSearchInput: (string: string) => void
    updateProductsStock: (list: IOrderItemCreate[]) => void
    addProduct: (productData: IProductCreate, token: string) => Promise<void>
    editProduct: (productData: IProductEdit, productId: number, token: string) => Promise<void>
    removeProduct: (productId: number, token: string) => Promise<void>
}