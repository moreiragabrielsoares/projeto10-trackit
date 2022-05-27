import { React , useState } from 'react';
import { Link , useNavigate } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

import { ThreeDots } from  'react-loader-spinner'

import imgLogo from "../assets/img/logo.png"




function SingUpPage() {
    
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [userPhoto, setUserPhoto] = useState("");

    const [isFormDisabled, setIsFormDisabled] = useState(false);

    const navigate = useNavigate();
    
    
    function register(event) {
        event.preventDefault();
        setIsFormDisabled(true);
        
        const singUpObj = {
            email: userEmail,
            name: userName,
            image: userPhoto,
            password: userPassword
        }

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", singUpObj);
        
        request.then((res) => {navigate("/")});         
        
        request.catch((erro) => {alert(erro.response.data.message); setIsFormDisabled(false); setUserEmail(""); setUserPassword(""); setUserName(""); setUserPhoto("")});
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
                disabled={isFormDisabled}
            />
            <FormInput 
                id="userPassword" 
                placeholder="senha" 
                onChange={e => setUserPassword(e.target.value)} 
                value={userPassword}
                type="password"
                required
                disabled={isFormDisabled}
            />
            <FormInput 
                id="userName" 
                placeholder="nome" 
                onChange={e => setUserName(e.target.value)} 
                value={userName}
                type="text"
                required
                disabled={isFormDisabled}
            />
            <FormInput 
                id="userPhoto" 
                placeholder="foto" 
                onChange={e => setUserPhoto(e.target.value)} 
                value={userPhoto}
                type="text"
                required
                disabled={isFormDisabled}
            />

            {isFormDisabled ? 
                (<FormButton type="submit" disabled={isFormDisabled}>
                    <ThreeDots color="#FFFFFF" height={50} width={50} />
                </FormButton>) 
                : (<FormButton type="submit" disabled={isFormDisabled}>Cadastrar</FormButton>)
            }


        </Form>


        <Link to="/">
            <LoginLine>Já tem uma conta? Faça login!</LoginLine>
        </Link>
        

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
    background: #FFFFFF;
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

    :disabled{
        opacity: 0.6;
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
    display: flex;
    align-items: center;
    justify-content: center;

    :disabled{
        opacity: 0.6;
    }
`;

const LoginLine = styled.div`
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 14px;
    text-decoration-line: underline;
    color: #52B6FF;
    margin-top: 25px;
`;