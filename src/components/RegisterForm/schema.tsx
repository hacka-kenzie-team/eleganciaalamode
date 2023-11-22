import { z } from "zod"

export const registerSchema = z.object({
    name: z.string().min(1, "O campo nome é necessário"),
    email: z.string().email("O campo email é necessário"),
    username: z.string().min(1, "O campo username é necessário"),
    password: z.string().min(8, "O campo senha é necessário, e precisa de pelomenos 8 caracteres")
        .regex(/(?=.*?[a-z])/, "É necessário ao menos 1 caractere em caixa baixa")
        .regex(/(?=.*?[A-Z])/, "É necessário ao menos 1 caractere em caixa alta")
        .regex(/(?=.*?[0-9])/, "É necessário ao menos 1 número")
        .regex(/(?=.*?[!@#$%^&*()\-__+.])/, "É necessário ao menos 1 caractere especial"),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não conferem",
    path: ["confirmPassword"],
})

export type TRegisterValues = z.infer<typeof registerSchema>;