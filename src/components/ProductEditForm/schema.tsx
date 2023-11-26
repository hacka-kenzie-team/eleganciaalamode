import { z } from "zod"

export const editProductSchema = z.object({
    name: z.string().optional().transform(e => {
        if (e === ""){
            return undefined
        }
        return e
    }),
    price: z
        .string()
        .optional()
        .transform(e => {
            if(e === "0"){
                return 0
            }
            if (e === ""){
                return undefined
            }
            return Number(e)
        }),
    stock: z
        .string()
        .optional()
        .transform(e => {
            if(e === "0"){
                return 0
            }
            if (e === ""){
                return undefined
            }
            return Number(e)
        }),
    description: z.string().optional().transform(e => {
        if (e === ""){
            return undefined
        }
        return e
    }),
    category: z.union([
        z.string().length(0, {message: "O campo categoria precisa ser escrito exatamente como uma destas opções: Acessorios, Calcados, Ternos ou Roupas"}),
        z.string().includes("Acessorios"),
        z.string().includes("Calcados"),
        z.string().includes("Roupas"),
        z.string().includes("Ternos")])
        .optional()
        .transform(e => {
            if (e === ""){
                return undefined
            }
            return e
        }),
    collection: z.string().optional().transform(e => {
        if (e === ""){
            return undefined
        }
        return e
    }),
    sale: z
        .union([z.string().length(0).nullable(), z.string()])
        .optional()
        .transform(e => {
            if (e === ""){
                return undefined
            }
            if (e === null) {
                return undefined
            }
            if (e === "true"){
                return true
            }
            if (e === "false"){
                return false
            }
        }),
    url: z.union([
        z.string().length(0, {message: "Url da imagem precisa ser do Google, catbox ou cloudinary!"}),
        z.string().includes("catbox", { message: "Tente uma URL de catbox.moe" }),
        z.string().includes("google", { message: "Tente uma URL de drive.google.com" }),
        z.string().includes("cloudinary", { message: "Tente uma URL de cloudinary.com" })])
        .optional()
        .transform(e => {
            return e
        }),
    keywords: z.string().optional().transform(e => {
        if (e === ""){
            return undefined
        }
        return e
    }),
})

export type TEditProductValues = z.infer<typeof editProductSchema>;