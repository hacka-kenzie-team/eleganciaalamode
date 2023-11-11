import { create } from 'zustand'
import { ICommentState } from './@commentTypes'
import { comments } from '@/data/comments';


export const commentStore = create<ICommentState>()((set) => ({
    commentList: [],

    loadComments: async () => {
        try {
            // set({ loading: true });
            // const { data } = await api.get<IProduct[]>("/products");
            const data = comments
            set({ commentList: data });
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

    addComment: async ({ comment }) => {
        set((state) => ({ commentList: [...state.commentList, comment] }));
        return comment;
    },

    editComment: async ({ comment }) => {
        set((state) => ({
            commentList: state.commentList.map((oldComment) => {
                if (oldComment.id === comment.id) {
                    return {
                        ...oldComment,
                        content: comment.content,
                        rating: comment.rating,
                        product_name: comment.product_name,
                        user_name: comment.user_name,
                    }
                } else {
                    return oldComment;
                };
            })
        }));
    },

    removeComment: async ({ commentId }) => {
        set((state) =>
        ({
            commentList: state.commentList.filter(oldcomment =>
                oldcomment.id !== commentId)
        }));
    },

}))