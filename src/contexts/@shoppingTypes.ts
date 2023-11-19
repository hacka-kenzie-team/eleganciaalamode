import { IProduct } from "./@productTypes"

export interface IShoppingItem {
    product: IProduct
    quantity: number
}

export interface IShoppingState {
    shoppingList: IShoppingItem[];
    shoppingModal: boolean

    addItem: (item: IProduct) => void;

    removeItem: (productId: number) => void

    clearShoppingList: () => void
    setShoppingModal: (boolean: boolean) => void
}