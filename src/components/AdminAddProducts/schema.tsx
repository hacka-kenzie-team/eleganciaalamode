import { z } from "zod"


export const addProductSchema = z.object({
    name: z.string().min(1, "O campo nome é necessário"),
    price: z.string().min(1, "O campo preço é necessário"),
    stock: z.string().min(1, "O campo estoque é necessário"),
    description: z.string().min(3, "O campo descrição é necessário"),
    category: z.string().refine((value) => 
    (value === "Acessorios" ||
    value === "Calcados" ||
    value === "Roupas" ||
    value === "Ternos"), {
    message: "Categoria precisa necessáriamente ser uma destas opções: Acessorios, Calcados, Roupas, Ternos",
    path: ["category"],
}),
    collection: z.string().min(1, "O campo coleção é necessário"),
    url: z.union([
        z.string().includes("google",{message: "Tente uma URL de drive.google.com"}), 
        z.string().includes("catbox",{message: "Tente uma URL de catbox.moe"}),
        z.string().includes("cloudinary",{message: "Tente uma URL de cloudinary.com"})])
        .and(z.string().url("Url da imagem precisa ser do Google, catbox ou cloudinary!"))
        .optional(),
    keywords: z.string().min(1, "O campo keywords é necessário").optional(),
})

export type TAddProductValues = z.infer<typeof addProductSchema>;