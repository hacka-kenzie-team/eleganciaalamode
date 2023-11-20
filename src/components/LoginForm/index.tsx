'use client'
import { userStore } from "@/contexts/userStore";

import { FormInput } from "../_fragments/Inputs"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginValues, loginSchema } from "./schema";
import { FormSubmitButton } from "../_fragments/buttons/FormSubmitButton";
import { AppleIcon, FacebookIcon, GoogleIcon } from "../_fragments/Icons";
import { GoogleSignInButton } from "../_fragments/buttons/GoogleSignInButton";


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
        <section>
            <form
                onSubmit={handleSubmit((formData) => parseLoginData(formData))}>
                <h1>LOGIN</h1>
                <div>
                    <FormInput type="text" register={register("username")} error={errors.username}>Digite seu username</FormInput>
                    <FormInput type="password" register={register("password")} error={errors.password}>Digite sua senha</FormInput>
                </div>
                <span>Ou entre com Google</span>
                <div>
                    <GoogleSignInButton />
                </div>
                <FormSubmitButton>Entrar</FormSubmitButton>
            </form>
        </section>
    )
}