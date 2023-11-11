import { create } from 'zustand'
import { IShoppingState } from './@shoppingTypes'


export const productStore = create<IShoppingState>()((set) => ({
    shoppingList: [],

    addItem: ({ item }) => {
        set((state) => ({
            shoppingList: state.shoppingList.find((oldItem) =>
                oldItem.product.id === item.product.id) ?
                state.shoppingList.map((shopItem) => {
                    if (shopItem.product.id === item.product.id) {
                        return {
                            ...item,
                            quantity: shopItem.quantity + 1,
                        }
                    } else {
                        return shopItem
                    };
                }) : [...state.shoppingList, item]
        }));
    },

    removeItem: ({ productId }) => {
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

}))