import { create } from 'zustand'
import { IComment, ICommentState } from './@commentTypes'
import { api } from '@/app/api/api';
import { boolean } from 'zod';


export const commentStore = create<ICommentState>()((set) => ({
    commentList: [],
    loading: false,
    error: "",
    message: "",
    commentaryModal: [false, "post"],

    loadComments: async ({ token }) => {
        try {
            set({ loading: true });
            const { data } = await api.get<IComment[]>("/comments/", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            set({ commentList: data });
            return data;
        } catch (error) {
            console.log(error);
            set({ error: "falha em carregar lista de comentários" });
            return null;
        } finally {
            set({ loading: false });
            setTimeout(() => { set({ message: "", error: "" }) }, 2000);
        };
    },

    addComment: async ({ comment, productId, token }) => {
        try {
            set({ loading: true });
            const { data } = await api.post<IComment>(`/comments/post/${productId}/`, comment, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            set((state) => ({ commentList: [...state.commentList, data] }));
            set({ message: "Comentário foi adicionado!" })
            return data;
        } catch (error) {
            console.log(error);
            set({ error: "falha postar o comentário." });
        } finally {
            set({ loading: false });
            setTimeout(() => { set({ message: "", error: "" }) }, 2000);
        };
    },

    editComment: async ({ comment, token, commentId }) => {
        try {
            set({ loading: true });
            const { data } = await api.patch<IComment>(`/comments/${commentId}/`, comment, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });
            set((state) => ({
                commentList: state.commentList.map((oldComment) => {
                    if (oldComment.id === data.id) {
                        return {
                            ...oldComment,
                            content: data.content,
                            rating: data.rating,
                        }
                    } else {
                        return oldComment;
                    };
                })
            }));
            set({ message: "Comentário foi modificado!" })
        } catch (error) {
            console.log(error);
            set({ error: "falha em editar comentário" });
        } finally {
            set({ loading: false });
            setTimeout(() => { set({ message: "", error: "" }) }, 2000);
        };
    },

    removeComment: async ({ commentId, token }) => {
        try {
            set({ loading: true });
            set({ loading: true });
            const { data } = await api.delete(`/comments/${commentId}/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });
            set((state) =>
            ({
                commentList: state.commentList.filter(oldcomment =>
                    oldcomment.id !== commentId)
            }));
            set({ message: "Comentário foi removido!" })
        } catch (error) {
            console.log(error);
            set({ error: "falha em deletar comentário" });
        } finally {
            set({ loading: false });
            setTimeout(() => { set({ message: "", error: "" }) }, 2000);
        };
    },

    commentaryModalToggle: (boolean, mode) => {
        set((state) => ({
         commentaryModal: [boolean, mode]
        }))
    },

    commentaryModalReset: () => {
        set({commentaryModal: [false, "post"]})},
}))