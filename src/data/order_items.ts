import { products } from "./products"

export const order_items = [
    {
        order_id: 1,
        product_list: [
            {
                product_name: "white shirt",
                product_price: (products.map((product)=> {
                    if (product.name === "white shirt") {
                        return product.price
                    }
                }))[0],
                quantity: 2
            }
        ]
    },
    {
        order_id: 2,
        product_list: [
            {
                product_name: "super skirt",
                product_price: (products.map((product)=> {
                    if (product.name === "super skirt") {
                        return product.price
                    }
                }))[0],
                quantity: 1
            },
            {
                product_name: "blue coat",
                product_price: (products.map((product)=> {
                    if (product.name === "blue coat") {
                        return product.price
                    }
                }))[0],
                quantity: 1
            },
        ]
    },
    {
        order_id: 3,
        product_list: [
            {
                product_name: "black suit",
                product_price: (products.map((product)=> {
                    if (product.name === "white shirt") {
                        return product.price
                    }
                }))[0],
                quantity: 4
            }
        ]
    },
    {
        order_id: 4,
        product_list: [
            {
                product_name: "leather boots",
                product_price: (products.map((product)=> {
                    if (product.name === "leather boots") {
                        return product.price
                    }
                }))[0],
                quantity: 1
            },
            {
                product_name: "winter dress",
                product_price: (products.map((product)=> {
                    if (product.name === "winter dress") {
                        return product.price
                    }
                }))[0],
                quantity: 1
            },
            {
                product_name: "black pants",
                product_price: (products.map((product)=> {
                    if (product.name === "black pants") {
                        return product.price
                    }
                }))[0],
                quantity: 1
            },
            {
                product_name: "white shirt",
                product_price: (products.map((product)=> {
                    if (product.name === "white shirt") {
                        return product.price
                    }
                }))[0],
                quantity: 1
            },
        ]
    },
    {
        order_id: 5,
        product_list: [
            {
                product_name: "white shirt",
                product_price: (products.map((product)=> {
                    if (product.name === "white shirt") {
                        return product.price
                    }
                }))[0],
                quantity: 10
            }
        ]
    },
    {
        order_id: 6,
        product_list: [
            {
                product_name: "black suit",
                product_price: (products.map((product)=> {
                    if (product.name === "black suit") {
                        return product.price
                    }
                }))[0],
                quantity: 2
            }
        ]
    },
    {
        order_id: 7,
        product_list: [
            {
                product_name: "blue coat",
                product_price: (products.map((product)=> {
                    if (product.name === "blue coat") {
                        return product.price
                    }
                }))[0],
                quantity: 2
            }
        ]
    },
]