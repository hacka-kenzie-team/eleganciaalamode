import { create } from 'zustand'
import { IProduct, IProductState } from './@productTypes'
import { api } from '@/app/api/api';
import { adminStore } from './adminStore';

const setError = adminStore.getState().setError
const setMessage = adminStore.getState().setMessage


export const productStore = create<IProductState>()((set) => ({
    productList: [],
    activeProduct: null,
    loading: false,
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
            setError("Falha em carregar lista de produtos" );
            return null;
        } finally {
            set({ loading: false });
            setError("");
            setMessage(""); 
            // setTimeout(() => { 
            // }, 2000);
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
            setError("Falha em carregar lista de produtos");
        } finally {
            set({ loading: false });
            setError("");
            setMessage(""); 
            // setTimeout(() => { 
            // }, 2000);
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
            setError("falha ao criar o produto.");
        } finally {
            set({ loading: false });
            setError("");
            setMessage(""); 
            // setTimeout(() => { 
            // }, 2000);
        };
    },

    editProduct: async (productData, productId, token) => {
        try {
            console.log(JSON.parse(JSON.stringify(productData)));
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
            setMessage("Produto Modificado!")
        } catch (error) {
            console.log(error);
            setError("falha em editar produto");
        } finally {
            set({ loading: false });
            setError("");
            setMessage("");
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
            setMessage("Produto removido com sucesso!")
        } catch (error) {
            console.log(error);
            setError("falha ao remover o produto.");
        } finally {
            set({ loading: false });
            setError("");
            setMessage(""); 
            // setTimeout(() => { 
            // }, 2000);
        };
    },
}));