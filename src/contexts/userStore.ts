import { create } from 'zustand'
import { IOrder, IUser, IUserData, IUserState, TToken } from './@userTypes'
import { api } from '@/app/api/api';
import { jwtDecode } from 'jwt-decode';
import { productStore } from './productStore';

const updateProductsStock = productStore.getState().updateProductsStock

export const userStore = create<IUserState>()((set) => ({
    userData: null,
    loading: false,
    error: "",
    message: "",

    logoutUser: () => {
        localStorage.removeItem("@elegancia:token");
        set({ userData: null });
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
            set({ message: "Login feito com sucesso!" });
            return true
        } catch (error) {
            console.log(error);
            set({ error: "Tentativa de login falhou" });
        } finally {
            set({ loading: false });
            setTimeout(() => { set({ message: "", error: "" }) }, 2000);
        };
    },

    loadUser: async () => {
        if (typeof window !== "undefined") {
            try {
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
            }
        }
    },

    registerUser: async (userData) => {
        try {
            set({ loading: true});
            const { data } = await api.post<IUser>("/login/", userData);
            set({ message: "Usuário registrado com sucesso!" });
            return true;
        } catch (error) {
            console.log(error);
            set({ error: "Tentativa de registro falhou" });
        } finally {
            set({ loading: false });
            setTimeout(() => { set({ message: "", error: "" }) }, 2000);
        };
    },

    buy: async ({order}) => {
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
            updateProductsStock(order.items_bought)
            return data
        } catch (error) {
            console.log(error);
            set({ error: "Tentativa de compra falhou" });
        } finally {
            set({ loading: false });
            setTimeout(() => { set({ message: "", error: "" }) }, 2000);
        }
    }
}))
