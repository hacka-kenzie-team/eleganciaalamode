import { create } from 'zustand'
import { IOrder, IUser, IUserData, IUserState, TEmailExists, TToken } from './@userTypes'
import { api } from '@/app/api/api';
import { jwtDecode } from 'jwt-decode';
import { productStore } from './productStore';
import { shoppingStore } from './shoppingStore';
import { adminStore } from './adminStore';


const updateProductsStock = productStore.getState().updateProductsStock
const clearShoppingList = shoppingStore.getState().clearShoppingList
const setShoppingModal = shoppingStore.getState().setShoppingModal
const setError = adminStore.getState().setError
const setMessage = adminStore.getState().setMessage

export const userStore = create<IUserState>()((set, get) => ({
    userData: null,
    loading: false,
  
    // setMessage: (string) => { set({message: string})},
    // setError: (string) => { set({error: string})},

    setLoading: (boolean) => {
        set({loading: boolean})
    },

    logoutUser: () => {
        localStorage.removeItem("@elegancia:token");
        set({ userData: null });
    },

    googleLogin: async (session) => {
        try {
            set({ loading: true });
            if (session) {
                const userCheck = await api.get<TEmailExists>(`check/${session.user?.email}/`)
                if (userCheck.data.email_exists == false) {
                    const userData = {
                        username: `${session.user?.email}@@` ?? "",
                        email: session.user?.email ?? "",
                        name: session.user?.name ?? "",
                        password: process.env.NEXT_PUBLIC_GOOGLE_USER_PASSWORD as string
                    }
                     await get().registerUser(userData)
                }
                set({ loading: true });
                const { data } = await api.post<TToken>("/login/", {
                    username: `${session.user?.email}@@`,
                    password: process.env.NEXT_PUBLIC_GOOGLE_USER_PASSWORD as string
                })
                const token = data.access;
                localStorage.setItem("@elegancia:token", JSON.stringify(token));
                const decoded: any = jwtDecode(token)
                const userID: number = decoded.user_id
                const user = await api.get<IUser>(`/users/${userID}/`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const new_userData = {
                    accessToken: token,
                    user: user.data
                }
                set({ userData: new_userData });
                return true
            } else {
                setError("Tentativa de login falhou");    
            }
        } catch (error) {
            console.log(error);
            setError("Tentativa de login falhou");
        } finally {
            set({ loading: false });
            // setTimeout(() => { 
            //     setError("");
            //     setMessage(""); 
            // }, 2000);
        };
    },

    loginUser: async ({ username, password }) => {
        try {
            set({ loading: true });
            const { data } = await api.post<TToken>("/login/", {
                username: username,
                password: password,
            });
            const token = data.access;
            localStorage.setItem("@elegancia:token", JSON.stringify(token));
            const decoded: any = jwtDecode(token)
            const userID: number = decoded.user_id
            const user = await api.get<IUser>(`/users/${userID}/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const new_userData = {
                accessToken: token,
                user: user.data
            }

            set({ userData: new_userData });
            setMessage("Login feito com sucesso!");
            return true
        } catch (error) {
            console.log(error);
            setError("Tentativa de login falhou");
        } finally {
            set({ loading: false });
            // setTimeout(() => { 
            //     setError("");
            //     setMessage(""); 
            // }, 2000);
        };
    },

    loadUser: async () => {
        if (typeof window !== "undefined") {
            try {
                set({loading: true})
                let token = localStorage.getItem("@elegancia:token");
                if (token) {
                    token = JSON.parse(token) as string
                    const decoded: any = jwtDecode(token)
                    const userID: number = decoded.user_id
                    const user = await api.get<IUser>(`/users/${userID}/`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    const new_userData = {
                        accessToken: token,
                        user: user.data
                    }
                    set({ userData: new_userData });
                }
            } catch (error) {
                console.log(error)
                localStorage.removeItem("@elegancia:token");
                set({ userData: null });
            } finally {
                set({ loading: false });
            }
        }
    },

    registerUser: async (userData) => {
        try {
            set({ loading: true });
            const { data } = await api.post<IUser>("/users/", userData);
            setMessage("Usuário registrado com sucesso!" );
            return true;
        } catch (error) {
            console.log(error);
            setError("Tentativa de registro falhou");
        } finally {
            set({ loading: false });
            // setTimeout(() => { 
            //     setError("");
            //     setMessage(""); 
            // }, 2000);
        };
    },

    buy: async ({ order }) => {
        try {
            set({ loading: true });
            const token = JSON.parse((localStorage.getItem("@elegancia:token") as string));
            const { data } = await api.post<IOrder>("/user/buy/", order, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });
            const patchPromises = order.items_bought.map(async (item) => {
                await api.patch(`/products/${item.productId}/stock/`, {
                    stock: item.quantityTotal - item.quantity
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            });
            await Promise.all(patchPromises);

            set((state) => {
                const userData = state.userData || {} as IUserData;
                const user = userData.user || {} as IUser;
                return {
                    userData: {
                        ...userData,
                        user: {
                            ...user,
                            orders: [
                                ...user.orders,
                                data
                            ]
                        }
                    }
                };
            });
            setMessage("Compra realizada com sucesso")
            updateProductsStock(order.items_bought)
            clearShoppingList()
            setShoppingModal(false)
            return data
        } catch (error) {
            console.log(error);
            setError("Tentativa de compra falhou");
        } finally {
            set({ loading: false });
            setTimeout(() => { 
                setError("");
                setMessage("");
            }, 2000);
        }
    }
}))
