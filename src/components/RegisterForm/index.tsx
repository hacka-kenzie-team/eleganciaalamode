'use client'
import { useRouter } from "next/navigation";
import { FormInput } from "../_fragments/Inputs"
import { userStore } from "@/contexts/userStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TRegisterValues, registerSchema } from "./schema";
import { FormSubmitButton } from "../_fragments/buttons/FormSubmitButton";
import { AppleIcon, FacebookIcon, GoogleIcon } from "../_fragments/Icons";


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
            onSubmit={handleSubmit((formData) => parseRegisterData(formData))}>
                <h1>CADASTRO</h1>
                <div>
                    <FormInput type="text" register={register("name")} error={errors.name}>Digite seu nome</FormInput>
                    <FormInput type="text" register={register("username")} error={errors.username}>Digite seu usuário</FormInput>
                    <FormInput type="email" register={register("email")} error={errors.email}>Digite seu email</FormInput>
                    <FormInput type="text" register={register("password")} error={errors.password}>Digite sua senha</FormInput>
                    <FormInput type="password" register={register("confirmPassword")} error={errors.confirmPassword}>Confirme sua senha</FormInput>
                </div>
                <span>Ou cadastre-se com sua rede social</span>
                <div>
                    <GoogleIcon />
                    <FacebookIcon />
                    <AppleIcon />
                </div>
                <FormSubmitButton>Cadastrar</FormSubmitButton>
            </form>
        </section>
    )
}
