import { create } from 'zustand'
import { IShoppingState } from './@shoppingTypes'


export const shoppingStore = create<IShoppingState>()((set) => ({
    loading: false,
    shoppingList: [],
    shoppingModal: false,

    addItem: (item) => {
        set((state) => ({
            shoppingList: state.shoppingList.find((oldItem) =>
                oldItem.product.id === item.id) ?
                state.shoppingList.map((shopItem) => {
                    if (shopItem.product.id === item.id) {
                        return {
                            ...shopItem,
                            quantity: shopItem.quantity + 1,
                        }
                    } else {
                        return shopItem
                    };
                }) : [
                    ...state.shoppingList,
                    {
                        product: item,
                        quantity: 1
                    }
                ]
        }));
    },

    removeItem: (productId) => {
        set((state) => ({
            shoppingList: state.shoppingList.some((oldItem)=> 
                oldItem.product.id === productId && oldItem.quantity > 1) ?
                state.shoppingList.map((shopItem) => {
                    if (shopItem.product.id === productId){
                        return {
                            ...shopItem,
                            quantity: shopItem.quantity -1
                        } 
                    } else {
                        return shopItem;
                    }
                }) : state.shoppingList.filter(olditem =>
                olditem.product.id !== productId)
        }));
    },

    clearShoppingList: () => { set((state) => ({shoppingList: []}))},

    setShoppingModal: (boolean) => { set((state) => ({shoppingModal: boolean}))}
}))