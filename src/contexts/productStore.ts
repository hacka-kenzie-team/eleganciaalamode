import { create } from 'zustand'
import { IProduct, IProductState } from './@productTypes'
import { api } from '@/app/api/api';


export const productStore = create<IProductState>()((set) => ({
    productList: [],
    loading: false,
    error: "",
    message: "",
    searchInput: "",

    loadProducts: async () => {
        try {
            set({ loading: true });
            const { data } = await api.get<IProduct[]>("/products/");
            set({ productList: data });
            return data;
        } catch (error) {
            console.log(error);
            set({ error: "Falha em carregar lista de produtos" });
            return null;
        } finally {
            set({ loading: false });
            setTimeout(() => { set({ message: "", error: "" }) }, 2000);
        };
    },

    loadSearchedProducts: async (searchInput) => {
        try {
            set({ loading: true });
            const { data } = await api.get<IProduct[]>(
                `/products/?search=${searchInput}`
            );
            set({ productList: data });
            return data;
        } catch (error) {
            console.log(error);
            set({ error: "Falha em carregar lista de produtos" });
        } finally {
            set({ loading: false });
            setTimeout(() => { set({ message: "", error: "" }) }, 2000);
        };
    },

    setSearchInput: (string) => {set({searchInput: string})}
    //add product
    //edit product
    //remove product
}))