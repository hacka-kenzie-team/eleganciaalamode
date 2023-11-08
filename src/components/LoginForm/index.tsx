import { AppleButton, FacebookButton, FormSubmitButton, GoogleButton } from "../_fragments/Buttons"
import { FormInput } from "../_fragments/Inputs"

export const LoginForm = () => {
    return (
        <section>
            <form>
            <h1>LOGIN</h1>
                <div>
                    <FormInput>Digite seu email</FormInput>
                    <FormInput>Digite sua senha</FormInput>
                </div>
                <span>Ou entre com sua rede social</span>
                <div>
                    <GoogleButton />
                    <FacebookButton />
                    <AppleButton />
                </div>
                <FormSubmitButton>Entrar</FormSubmitButton>
            </form>
        </section>
    )
}