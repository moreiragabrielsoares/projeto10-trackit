import { React , useState } from 'react';
import styled from 'styled-components';

import imgLogo from "../assets/img/logo.png"




function SingUpPage() {
    
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [userPhoto, setUserPhoto] = useState("");
    
    
    function register(event) {
        event.preventDefault();
        console.log(userPassword);
    }
    
    
    return (
      <Container>

        <ImgLogo src={imgLogo} />

        <Form onSubmit={register}>
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
            <FormInput 
                id="userName" 
                placeholder="nome" 
                onChange={e => setUserName(e.target.value)} 
                value={userName}
                type="text"
                required
            />
            <FormInput 
                id="userPhoto" 
                placeholder="foto" 
                onChange={e => setUserPhoto(e.target.value)} 
                value={userPhoto}
                type="text"
                required
            />
            <FormButton type="submit">Cadastrar</FormButton>
        </Form>

        <LoginLine>Já tem uma conta? Faça login!</LoginLine>

      </Container>
    );
}
  



export default SingUpPage;


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
    background: #52B6FF;
    border-radius: 5px;
    border: 1px solid #52B6FF;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 22px;
    color: #FFFFFF;
`;

const LoginLine = styled.div`
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 14px;
    text-decoration-line: underline;
    color: #52B6FF;
    margin-top: 25px;
`;