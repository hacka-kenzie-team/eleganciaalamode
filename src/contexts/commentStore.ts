import { create } from 'zustand'
import { IComment, ICommentState } from './@commentTypes'
import { api } from '@/app/api/api';
import { adminStore } from './adminStore';

const setError = adminStore.getState().setError
const setMessage = adminStore.getState().setMessage


export const commentStore = create<ICommentState>()((set) => ({
    commentList: [],
    loading: false,
    commentaryModal: [false, "post"],
    activeComment: null,

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
            setError("falha em carregar lista de comentários");
            return null;
        } finally {
            set({ loading: false });
            // setTimeout(() => { 
            //     setError("");
            //     setMessage(""); 
            // }, 2000);
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
            setMessage("Comentário foi adicionado!");
            return data;
        } catch (error) {
            console.log(error);
            setError("falha postar o comentário.");
        } finally {
            set({ loading: false });
            // setTimeout(() => { 
            //     setError("");
            //     setMessage(""); 
            // }, 2000);
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
            setMessage("Comentário foi modificado!")
        } catch (error) {
            console.log(error);
            setError("falha em editar comentário");
        } finally {
            set({ loading: false });
            // setTimeout(() => { 
            //     setError("");
            //     setMessage(""); 
            // }, 2000);
        };
    },

    removeComment: async ({ commentId, token }) => {
        try {
            set({ loading: true });
            set({ loading: true });
            await api.delete(`/comments/${commentId}/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });
            set((state) =>
            ({
                commentList: state.commentList.filter(oldcomment =>
                    oldcomment.id !== commentId)
            }));
            setMessage("Comentário foi removido!")
        } catch (error) {
            console.log(error);
            setError("falha em deletar comentário");
        } finally {
            set({ loading: false });
            // setTimeout(() => { 
            //     setError("");
            //     setMessage(""); 
            // }, 2000);
        };
    },

    commentaryModalToggle: (boolean, mode) => {
        set((state) => ({
         commentaryModal: [boolean, mode]
        }))
    },

    setActiveComment: (comment) => {
        set((state) => ({
            activeComment: comment
        }))
    }
}))