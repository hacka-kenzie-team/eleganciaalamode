'use client'
import { useRouter } from "next/navigation";
import { FormInput } from "../_fragments/Inputs"
import { userStore } from "@/contexts/userStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TRegisterValues, registerSchema } from "./schema";
import { FormSubmitButton } from "../_fragments/buttons/FormSubmitButton";
import Link from "next/link";
import { GoogleSignInButton } from "../_fragments/buttons/GoogleSignInButton";


export const RegisterForm = () => {
    const { registerUser } = userStore((store) => store);
    const { push } = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TRegisterValues>({
        resolver: zodResolver(registerSchema),
    });

    const parseRegisterData = async (userData: TRegisterValues) => {
        await registerUser(userData);
        push("/login");
    };

    return (
        <section>
            <form
                onSubmit={handleSubmit((formData) => parseRegisterData(formData))}
                className="flex flex-col gap-8 text-second">
                <h1 className="flex justify-center">CADASTRO</h1>
                <div className="flex flex-col gap-8">
                    <FormInput type="text" register={register("name")} error={errors.name}>Digite seu nome</FormInput>
                    <FormInput type="text" register={register("username")} error={errors.username}>Digite seu usuário</FormInput>
                    <FormInput type="email" register={register("email")} error={errors.email}>Digite seu email</FormInput>
                    <FormInput type="text" register={register("password")} error={errors.password}>Digite sua senha</FormInput>
                    <FormInput type="password" register={register("confirmPassword")} error={errors.confirmPassword}>Confirme sua senha</FormInput>
                </div>
                <span className="flex gap-2">
                    <p>caso já tenha uma conta</p>
                    <Link href={'/login'} className="underline decoration-1">ENTRE</Link>
                </span>
                <FormSubmitButton>CADASTRAR</FormSubmitButton>
                <span className="text-second flex-col gap-2">
                    <p className="">Ou entre com sua conta do Google:</p>
                    <GoogleSignInButton />
                </span>
            </form>
        </section>
    )
}
