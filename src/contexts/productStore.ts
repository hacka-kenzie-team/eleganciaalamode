import { create } from 'zustand'
import { IProduct, IProductState } from './@productTypes'
import { api } from '@/app/api/api';


export const productStore = create<IProductState>()((set) => ({
    productList: [],
    activeProduct: null,
    loading: false,
    error: "",
    message: "",
    searchInput: "",

    setActiveProduct: (product) => {
        set((state) => ({ activeProduct: product }))
    },

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

    setSearchInput: (string) => { set({ searchInput: string }) },

    updateProductsStock: (list) => {
        set((state) => {
            const productList = state.productList

            return {
                productList: productList.map((product) => {
                    const foundItem = list.find((item) => item.productId === product.id)
                    if (foundItem) {
                        return {
                            ...product,
                            stock: product.stock - foundItem.quantity
                        }
                    } else {
                        return {
                            ...product
                        }
                    }
                }
                )
            }
        })
    },

    addProduct: async (productData, token) => {
        try {
            set({ loading: true });
            const { data } = await api.post<IProduct>(`/products/`, productData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            set((state) => ({
                productList: [...state.productList, data]
            }))
        } catch (error) {
            console.log(error);
            set({ error: "falha ao criar o produto." });
        } finally {
            set({ loading: false });
            setTimeout(() => { set({ message: "", error: "" }) }, 2000);
        };
    },

    editProduct: async (productData, productId, token) => {
        try {
            set({ loading: true });
            const { data } = await api.patch<IProduct>(`/products/${productId}/`, productData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            set((state) => ({
                productList: state.productList.map((oldProduct) => {
                    if (oldProduct.id === data.id) {
                        oldProduct.keywords = [...data.keywords];
                        return {
                            ...oldProduct,
                            ...data
                        }
                    } else {
                        return oldProduct;
                    };
                })
            }));
            set({ message: "Produto Modificado!" })
        } catch (error) {
            console.log(error);
            set({ error: "falha em editar produto" });
        } finally {
            set({ loading: false });
            setTimeout(() => { set({ message: "", error: "" }) }, 2000);
        };
    },

    removeProduct: async (productId, token) => {
        try {
            set({ loading: true });
            await api.delete(`/products/${productId}/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            set((state) =>
            ({
                productList: state.productList.filter(oldProduct =>
                    oldProduct.id !== productId)
            }));
            set({ message: "Produto removido com sucesso!" })
        } catch (error) {
            console.log(error);
            set({ error: "falha ao remover o produto." });
        } finally {
            set({ loading: false });
            setTimeout(() => { set({ message: "", error: "" }) }, 2000);
        };
    },
}));