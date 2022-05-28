import { React , useState, useContext } from 'react';
import UserContext from '../contexts/UserContext'
import { Link , useNavigate } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

import { ThreeDots } from  'react-loader-spinner'

import imgLogo from "../assets/img/logo.png"



function LoginPage() {
    
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const [isFormDisabled, setIsFormDisabled] = useState(false);
    
    const navigate = useNavigate();

    const {token, setToken, userImg, setUserImg} = useContext(UserContext);
    
    function login(event) {
        event.preventDefault();
        setIsFormDisabled(true);

        const loginObj = {
            email: userEmail,
            password: userPassword
        }


        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", loginObj);
        
        request.then(loginSuccess);         
        
        request.catch((erro) => {alert(erro.response.data.message); setIsFormDisabled(false)});

    }
    

    function loginSuccess (res) {
        console.log(res.data);
        setToken(res.data.token);
        setUserImg(res.data.image);
        navigate("/hoje");
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


            {isFormDisabled ? 
                (<FormButton type="submit" disabled={isFormDisabled}>
                    <ThreeDots color="#FFFFFF" height={50} width={50} />
                </FormButton>) 
                : (<FormButton type="submit" disabled={isFormDisabled}>Entrar</FormButton>)
            }


        </Form>


        <Link to="/cadastro">
            <SingUpLine>Não tem uma conta? Cadastre-se!</SingUpLine>
        </Link>
        

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

    :hover {
        cursor: pointer;
    }
`;

const SingUpLine = styled.div`
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 14px;
    text-decoration-line: underline;
    color: #52B6FF;
    margin-top: 25px;
    :hover {
        cursor: pointer;
    }
`;
