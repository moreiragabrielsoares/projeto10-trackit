import React from 'react';
import styled from 'styled-components';



import Top from "./Top";
import FooterMenu from "./FooterMenu";



function HistoryPage() {
    return (
        <>
            <Top />
            
            
            <PageContainer>History Page</PageContainer>


            <FooterMenu />
        </>
    );
}
  



export default HistoryPage;



const PageContainer = styled.div`
    margin-top: 70px;
    margin-bottom: 70px;
    height: calc(100vh - 140px);
    background-color: #f2f2f2;
`;