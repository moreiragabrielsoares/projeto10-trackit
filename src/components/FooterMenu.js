import React from 'react';
import styled from 'styled-components';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



function FooterMenu() {
    
    const percentage = 40;
    
    return (
      <Container>
        <FooterButton>Hábitos</FooterButton>

        <Progressbar>
            <CircularProgressbarWithChildren 
                value={percentage}
                background
                backgroundPadding={6}
                styles={buildStyles({
                backgroundColor: "#52B6FF",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
                })}>

                <TextProgressbar>Hoje</TextProgressbar>

            </CircularProgressbarWithChildren>
        </Progressbar>
        <FooterButton>Histórico</FooterButton>
      </Container>
    );
}
  



export default FooterMenu;



const Container = styled.div`
    height: 70px;
    width: 100%;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const FooterButton = styled.div`
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 18px;
    color: #52B6FF;
    :hover{
        cursor: pointer;
    }
`;

const Progressbar = styled.div`
    width: 91px;
    height: 91px;
    margin-bottom: 50px;
    :hover{
        cursor: pointer;
    }
`;

const TextProgressbar = styled.div`
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;
`;