export interface IComment {
    id: number;
    content: string;
    rating: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 ;
    product_name: string;
    user_name: string;
}

export interface ICommentState {
    commentList: IComment[];

    loadComments: () => Promise<IComment[] | null>

    addComment: ({ comment }: {
        comment: IComment;
    }) => Promise<IComment>;

    editComment: ({ comment }: {
        comment: IComment;
    }) => Promise<void>;

    removeComment: ({ commentId }: {
        commentId: number;
    }) => Promise<void>
}