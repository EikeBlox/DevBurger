import Logo from '../../assets/Logo.png'
import { Button, 
    Container, 
    Form, 
    InputContainer, 
    LeftContainer, 
    RightContainer, 
    Title,
} from './styles'

export function Login(){
    return (
        <div>
            <Container>
               <LeftContainer>
                    <h1>Login</h1>
                    <img src={Logo} alt="logo-devburger"></img>
               </LeftContainer>
               <RightContainer>
                    <Title>
                        Olá, seja bem-vindo ao <span>Dev Burguer!</span>
                        <br/>
                        Acesse com seu<span> Login e senha</span>.
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
                       
                        <Button>Entrar</Button>
                        <p>Não possui conta? <a>Clique aqui.</a></p>
                    </Form>
               </RightContainer>
            </Container>
        </div>
    )
}
