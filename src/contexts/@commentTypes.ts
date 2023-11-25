export interface ICommentCreate {
    content: string;
    rating: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 ;
}

export interface IComment {
    id: number;
    content: string;
    rating: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 ;
    product_name: string;
    user_name: string;
}

export interface ICommentState {
    commentList: IComment[];
    loading: boolean;
    error: string;
    message: string;
    commentaryModal: (("post" | "edit" | "delete") | boolean)[];
    activeComment: IComment | null

    loadComments: ({ token }: {
        token: string;
    }) => Promise<IComment[] | null>
    
    addComment: ({ comment }: {
        comment: ICommentCreate;
        token: string;
        productId: number;
    }) => Promise<IComment | undefined >;

    editComment: ({ comment, token, commentId }: {
        comment: ICommentCreate;
        token: string;
        commentId: number;
    }) => Promise<void >;

    removeComment: ({ commentId, token }: {
        token: string
        commentId: number;
    }) => Promise<void>

    commentaryModalToggle: (
        boolean: boolean,
        mode: ("post" | "edit" | "delete")
    ) => void

    setActiveComment: (comment: IComment | null) => void
}