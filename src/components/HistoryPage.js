import React from 'react';
import styled from 'styled-components';



import Top from "./Top";
import FooterMenu from "./FooterMenu";



function HistoryPage() {
    return (
        <>
            <Top />
            
            
            <PageContainer>

                <TitleLine>Histórico</TitleLine>
                <ResumeLine>Em breve você poderá ver o histórico dos seus hábitos aqui!</ResumeLine>

            </PageContainer>


            <FooterMenu />
        </>
    );
}
  



export default HistoryPage;



const PageContainer = styled.div`
    margin-top: 70px;
    padding: 10px 18px 30px 18px;
    margin-bottom: 70px;
    min-height: calc(100vh - 140px);
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
`;

const TitleLine = styled.p`
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 23px;
    color: #126BA5;
    margin-top: 20px;
`;

const ResumeLine = styled.p`
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 18px;
    color: #666666;
    margin-top: 18px;
`;