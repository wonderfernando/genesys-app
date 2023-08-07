import { FormEvent } from "react";
import { useForm } from "../../hooks/useForm";
import { ButtomContainer, FooterLogin, FormContainer, LoginContainer, TopLogin } from "./styles";
import Error from "../../Helpers/Error";

export default function Login() {
    const email = useForm()
    const password = useForm()
    function handleSubmitLogin(e: FormEvent) {
        e.preventDefault()
        email.validaty()
        password.validaty()
        console.log(email)
    }

    return (
     <LoginContainer>
        <TopLogin>
            <h1>Genesys</h1>
            <span>Faca login para comecar a usar</span>
        </TopLogin>
        <FormContainer>
            <form action="" onSubmit={handleSubmitLogin}>
                <div>
                    <label htmlFor="">Endereco de Email</label>
                    <input value={email.value} onChange={email.onChange} onBlur={email.onBlur} type="email" placeholder="silva@gmail.com"/>
                    {email.error && <Error description={email.error} />}
                    
                </div>
                <div>
                    <label htmlFor="">Palavra-passe</label>
                    <input  value={password.value} onChange={password.onChange} onBlur={password.onBlur} type="password" placeholder="******************"/>
                    {password.error && <Error description={password.error} />}
                </div>
                <ButtomContainer>
                    <button type="submit">Entrar</button>
                </ButtomContainer>
            </form>
        </FormContainer>
        <FooterLogin>
            <a href="#">Esqueci a senha</a>
        </FooterLogin>
     </LoginContainer>
    )
}