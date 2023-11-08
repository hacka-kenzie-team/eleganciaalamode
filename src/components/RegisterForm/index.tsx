import { AppleButton, FacebookButton, FormSubmitButton, GoogleButton } from "../_fragments/Buttons"
import { FormInput } from "../_fragments/Inputs"

export const RegisterForm = () => {
    return (
        <section>
            <form>
                <h1>CADASTRO</h1>
                <div>
                    <FormInput>Digite seu nome</FormInput>
                    <FormInput>Digite seu email</FormInput>
                    <FormInput>Digite sua senha</FormInput>
                    <FormInput>Confirme sua senha</FormInput>
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