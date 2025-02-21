import { Button, Container, Form, InputContainer, LeftContainer, Link, RightContainer, Title } from './styles'
import Logo from '../../'

export function Login(){
    return (
        <div>
            <Container>
               <LeftContainer>
                    <h1>Login</h1>
                    <img scr={Logo} alt="logo-devburger"></img>
               </LeftContainer>
               <RightContainer>
                    <Title>
                        Olá, seja bem-vindo ao <span>Dev Burguer!</span> Acesse com seu
                        <span>Login e senha</span>.
                    </Title>
                    <Form>
                        <InputContainer>
                            <label>Email</label>
                            <input type="email"></input>
                        </InputContainer>

                        <InputContainer>
                            <label>Senha</label>
                            <input type="password"></input>
                        </InputContainer>
                        <Link>Esqueci minha senha.</Link>
                        <Button>Entrar</Button>
                        <Link>Não possui conta? Clique aqui.</Link>
                    </Form>
               </RightContainer>
            </Container>
        </div>
    )
}
