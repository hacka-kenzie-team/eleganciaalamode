import { IProduct } from "@/contexts/@productTypes";
import { comments } from "./comments"

const getAverage = (list:(number)[]) => {
    return list.reduce((a,c) => a + c) / (list.length || 1);
}

export const products: IProduct[] = [
    {
        id: 1,
        name: "white shirt",
        slug: "whiteshirt",
        price: 9999.99,
        stock: 10,
        category: "shirt",
        visit_number: 0,
        collection: "summer",
        sale: false,
        spotlight: false,
        keyword: ["shirt","white","summer", "light"],
        style: {
            url: "",
        },
        comments: comments.filter((comment) => comment.product_name === "white shirt"),
        rating: getAverage(
            comments
                .filter((comment) => comment.product_name === "white shirt")
                .map((comment) => comment.rating || 0)
        ),
    },
    {
        id: 2,
        name: "black pants",
        slug: "blackpants",
        price: 9999.99,
        stock: 10,
        category: "pants",
        visit_number: 0,
        collection: "summer",
        sale: true,
        spotlight: false,
        keyword: ["pants","black","summer", "dark"],
        style: {
            url: "",
        },
        comments: comments.filter((comment) => comment.product_name === "black pants"),
        rating: getAverage(
            comments
                .filter((comment) => comment.product_name === "black pants")
                .map((comment) => comment.rating || 0)
        ),
    },
    {
        id: 3,
        name: "winter dress",
        slug: "winterdress",
        price: 9999.99,
        stock: 10,
        category: "dress",
        visit_number: 0,
        collection: "winter",
        sale: false,
        spotlight: false,
        keyword: ["dress","white","winter", "light"],
        style: {
            url: "",
        },
        comments: comments.filter((comment) => comment.product_name === "winter dress"),
        rating: getAverage(
            comments
                .filter((comment) => comment.product_name === "winter dress")
                .map((comment) => comment.rating || 0)
        ),
    },
    {
        id: 4,
        name: "leather boots",
        slug: "leatherboots",
        price: 9999.99,
        stock: 10,
        category: "shirt",
        visit_number: 0,
        collection: "winter",
        sale: false,
        spotlight: false,
        keyword: ["boots","beige","winter", "warm"],
        style: {
            url: "",
        },
        comments: comments.filter((comment) => comment.product_name === "leather boots"),
        rating: getAverage(
            comments
                .filter((comment) => comment.product_name === "leather boots")
                .map((comment) => comment.rating || 0)
        ),
    },
    {
        id: 5,
        name: "blue coat",
        slug: "bluecoat",
        price: 9999.99,
        stock: 10,
        category: "coat",
        visit_number: 0,
        collection: "winter",
        sale: false,
        spotlight: false,
        keyword: ["coat","blue","winter", "light"],
        style: {
            url: "",
        },
        comments: comments.filter((comment) => comment.product_name === "blue coat"),
        rating: getAverage(
            comments
                .filter((comment) => comment.product_name === "blue coat")
                .map((comment) => comment.rating || 0)
        ),
    },
    {
        id: 6,
        name: "super skirt",
        slug: "superskirt",
        price: 9999.99,
        stock: 10,
        category: "skirt",
        visit_number: 0,
        collection: "summer",
        sale: false,
        spotlight: false,
        keyword: ["skirt","leather","summer", "light"],
        style: {
            url: "",
        },
        comments: comments.filter((comment) => comment.product_name === "super skirt"),
        rating: getAverage(
            comments
                .filter((comment) => comment.product_name === "super skirt")
                .map((comment) => comment.rating || 0)
        ),
    },
    {
        id: 7,
        name: "black suit",
        slug: "blacksuit",
        price: 9999.99,
        stock: 10,
        category: "suit",
        visit_number: 0,
        collection: "winter",
        sale: false,
        spotlight: false,
        keyword: ["suit","black","winter", "dark"],
        style: {
            url: "",
        },
        comments: comments.filter((comment) => comment.product_name === "black suit"),
        rating: getAverage(
            comments
                .filter((comment) => comment.product_name === "black suit")
                .map((comment) => comment.rating || 0)
        ),
    },
]