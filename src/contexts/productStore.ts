import { create } from 'zustand'
import { IProductState } from './@productTypes'
import { products } from '@/data/products';


export const productStore = create<IProductState>()((set) => ({
    productList: [],
    loadProducts: async () => {
        try {
            // set({ loading: true });
            // const { data } = await api.get<IProduct[]>("/products");
            const data = products
            set({ productList: data });
            return data;
        } catch (error) {
            console.log(error);
            // set({ error: "Failed to load products list" });
            return null;
        } finally {
            // set({ loading: false });
            // setTimeout(() => { set({ message: "", error: "" }) }, 2000);
        };
    },

    //add product
    //edit product
    //remove product
}))