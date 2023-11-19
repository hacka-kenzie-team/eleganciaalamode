import { z } from "zod"

export const commentSchema = z.object({
    content: z.string().min(10, "Digite no mínimo 10 carácteres"),
    rating: z.string({invalid_type_error: "Marque alguma opção"})
})