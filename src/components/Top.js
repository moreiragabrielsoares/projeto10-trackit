import React from 'react';
import styled from 'styled-components';




function Top() {
    return (
      <Container>
        <Logo>TrackIt</Logo>
        <UserImg src='https://viciados.net/wp-content/uploads/2020/02/Naruto-Cl%C3%A1ssico-e-Naruto-Shippuden-fillers.jpg'/>
      </Container>
    );
}
  



export default Top;



const Container = styled.div`
	display: flex;
    flex-direction: row;
    height: 70px;
    width: 100%;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
`;

const Logo = styled.div`
	font-family: 'Playball';
    font-weight: 400;
    font-size: 40px;
    color: #FFFFFF;
    margin: 0 15px;
`;

const UserImg = styled.img`
    border-radius: 50%;
    width: 51px;
    height: 51px;
    object-fit: cover;
    margin: 0 15px;
`;