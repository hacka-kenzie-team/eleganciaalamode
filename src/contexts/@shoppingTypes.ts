import { IProduct } from "./@productTypes"

export interface IShoppingItem {
    product: IProduct
    quantity: number
}

export interface IShoppingState {
    shoppingList: IShoppingItem[];

    addItem: ({ item }: {
        item: IShoppingItem;
    }) => void;

    removeItem: ({ productId }: {
        productId: number;
    }) => void

    clearShoppingList: () => void
}