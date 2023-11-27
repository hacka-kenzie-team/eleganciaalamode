'use client'
import { userStore } from "@/contexts/userStore";

import { FormInput } from "../_fragments/Inputs"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginValues, loginSchema } from "./schema";
import { FormSubmitButton } from "../_fragments/buttons/FormSubmitButton";
import { GoogleSignInButton } from "../_fragments/buttons/GoogleSignInButton";
import Link from "next/link";


export const LoginForm = () => {
    const { loginUser } = userStore((store) => store);
    const { push } = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TLoginValues>({
        resolver: zodResolver(loginSchema),
    });

    const parseLoginData = async (userData: TLoginValues) => {
        await loginUser(userData) && push("dashboard");
    };

    return (
        <section className="flex flex-col justify-center gap-10">
            <h1 className="text-3xl flex justify-center mb-9 text-second">LOGIN</h1>
            <form
                onSubmit={handleSubmit((formData) => parseLoginData(formData))}
                className="flex flex-col gap-9">
                <div className="flex flex-col gap-9 text-second">
                    <FormInput type="text" register={register("username")} error={errors.username}>Digite seu username</FormInput>
                    <FormInput type="password" register={register("password")} error={errors.password}>Digite sua senha</FormInput>
                </div>
                <span className="text-second flex gap-2">
                    <p className="">Caso ainda não tenha conta,</p>
                    <Link href={'/register'} className="underline decoration-1 hover:translate-y-px transition-all">REGISTRE-SE</Link>
                </span>
                <FormSubmitButton>ENTRAR</FormSubmitButton>
                <span className="text-second flex items-center gap-5">
                    <p className="">Ou entre com sua conta do Google:</p>
                    <GoogleSignInButton />
                </span>
            </form>
        </section>
    )
}