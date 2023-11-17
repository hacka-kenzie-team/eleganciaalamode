'use client'
import { useRouter } from "next/navigation";
import { AppleButton, FacebookButton, FormSubmitButton, GoogleButton } from "../_fragments/Buttons"
import { FormInput } from "../_fragments/Inputs"
import { userStore } from "@/contexts/userStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TRegisterValues, registerSchema } from "./schema";


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
        await registerUser({userData}) && push("login");
      };

    return (
        <section>
            <form
            onSubmit={handleSubmit((formData) => parseRegisterData(formData))}>
                <h1>CADASTRO</h1>
                <div>
                    <FormInput type="text" register={register("name")} error={errors.name}>Digite seu nome</FormInput>
                    <FormInput type="text" register={register("password")} error={errors.username}>Digite seu usuário</FormInput>
                    <FormInput type="email" register={register("email")} error={errors.email}>Digite seu email</FormInput>
                    <FormInput type="text" register={register("password")} error={errors.password}>Digite sua senha</FormInput>
                    <FormInput type="password" register={register("confirmPassword")} error={errors.confirmPassword}>Confirme sua senha</FormInput>
                </div>
                <span>Ou cadastre-se com sua rede social</span>
                <div>
                    <GoogleButton />
                    <FacebookButton />
                    <AppleButton />
                </div>
                <FormSubmitButton>Cadastrar</FormSubmitButton>
            </form>
        </section>
    )
}
