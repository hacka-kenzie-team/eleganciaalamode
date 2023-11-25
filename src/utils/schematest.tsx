import { z } from "zod"


export const addProductSchema = z.object({
    name: z.string().min(1, "O campo nome é necessário"),
    price: z.string().min(1, "O campo preço é necessário"),
    stock: z.string().min(1, "O campo estoque é necessário"),
    description: z.string().min(3, "O campo descrição é necessário"),
    category: z.string().min(1, "O campo categoria é necessário"),
    collection: z.string().min(1, "O campo coleção é necessário"),
    url: z.union([
        z.string().includes("google",{message: "Tente uma URL de drive.google.com"}), 
        z.string().includes("catbox",{message: "Tente uma URL de catbox.moe"}),
        z.string().includes("cloudinary",{message: "Tente uma URL de cloudinary.com"})])
        .and(z.string().url("Url da imagem precisa ser do Google, catbox ou cloudinary!")),
    keywords: z.string().min(1, "O campo keywords é necessário"),
}).refine((data) => 
    (data.category === "Acessorios" ||
    data.category === "Calcados" ||
    data.category === "Roupas" ||
    data.category === "Ternos"), {
    message: "Categoria precisa necessáriamente ser uma destas opções: Acessorios, Calcados, Roupas, Ternos",
    path: ["category"],
})

export type TAddProductValues = z.infer<typeof addProductSchema>;

export const editProductSchema = z.object({
    name: z
    .union([z.string().length(0), z.string()])
    .optional()
    .transform(e => e === "" ? undefined : e),
    slug: z
    .union([z.string().length(0), z.string()])
    .optional()
    .transform(e => e === "" ? undefined : e),
    price: z
    .union([z.string().length(0), z.string()])
    .optional()
    .transform(e => e === "" ? undefined : e),
    stock: z
    .union([z.string().length(0), z.string()])
    .optional()
    .transform(e => e === "" ? undefined : e),
    description: z
    .union([z.string().length(0), z.string()])
    .optional()
    .transform(e => e === "" ? undefined : e),
    category: z
    .union([z.string().length(0), z.string()])
    .optional()
    .transform(e => e === "" ? undefined : e),
    collection: z
    .union([z.string().length(0), z.string()])
    .optional()
    .transform(e => e === "" ? undefined : e),
    sale: z.boolean().optional(),
    url: z.union([
        z.string().includes("google",{message: "Tente uma URL de drive.google.com"}), 
        z.string().includes("catbox",{message: "Tente uma URL de catbox.moe"}),
        z.string().includes("cloudinary",{message: "Tente uma URL de cloudinary.com"})])
        .and(z.string().url("Url da imagem precisa ser do Google, catbox ou cloudinary!"))
        .optional()
        .transform(e => e === "" ? undefined : e),
    keywords: z
    .union([z.string().length(0), z.string()])
    .optional()
    .transform(e => e === "" ? undefined : e),
})

export type TEditProductValues = z.infer<typeof editProductSchema>;