import { React , useState } from 'react';
import styled from 'styled-components';

import imgLogo from "../assets/img/logo.png"



function LoginPage() {
    
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    
    
    function login(event) {
        event.preventDefault();
        console.log(userPassword);
    }
    
    
    return (
      <Container>

        <ImgLogo src={imgLogo} />

        <Form onSubmit={login}>
            <FormInput 
                id="userEmail" 
                placeholder="email" 
                onChange={e => setUserEmail(e.target.value)} 
                value={userEmail}
                type="email"
                required
            />
            <FormInput 
                id="userPassword" 
                placeholder="senha" 
                onChange={e => setUserPassword(e.target.value)} 
                value={userPassword}
                type="password"
                required
            />
            <FormButton type="submit">Entrar</FormButton>
        </Form>

        <SingUpLine>Não tem uma conta? Cadastre-se!</SingUpLine>

      </Container>
    );
}
  
export default LoginPage;



const Container = styled.div`
	display: flex;
    flex-direction: column;
    align-items: center;
`;

const ImgLogo = styled.img`
	width: 180px;
    margin: 60px 0 30px 0;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FormInput = styled.input`
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 7px;
    font-size: 16px;
    padding-left:5px;
    ::placeholder{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 20px;
        color: #DBDBDB;
    }
`;

const FormButton = styled.button`
    width: 303px;
    height: 45px;
    background-color: #52B6FF;
    border-radius: 5px;
    border: 1px solid #52B6FF;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 22px;
    color: #FFFFFF;
`;

const SingUpLine = styled.div`
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 14px;
    text-decoration-line: underline;
    color: #52B6FF;
    margin-top: 25px;
`;
