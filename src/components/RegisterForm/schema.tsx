import { z } from "zod"

export const registerSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Email is required"),
    username: z.string().email("Email is required"),
    password: z.string().min(8, "Password is required and needs at least 8 characters")
        .regex(/(?=.*?[a-z])/, "At least one lower case character is necessary")
        .regex(/(?=.*?[A-Z])/, "At least one upper case character is necessary")
        .regex(/(?=.*?[0-9])/, "At least one number is necessary")
        .regex(/(?=.*?[!@#$%^&*()\-__+.])/, "At least one special character is necessary"),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
})

export type TRegisterValues = z.infer<typeof registerSchema>;