import React from 'react';
import styled from 'styled-components';


import Top from "./Top";
import FooterMenu from "./FooterMenu";



function HabitsPage() {
    return (
        <>
            <Top />
            
            
            <PageContainer>

                <TitleContainer>
                    <Title>Meus hábitos</Title>
                    <AddButton>+</AddButton>
                </TitleContainer>


                <AddHabitContainer>

                    <AddHabitInput placeholder='nome do hábito'></AddHabitInput>

                    <DaysContainer>
                        <DayBox>D</DayBox>
                        <DayBox>S</DayBox>
                        <DayBox>T</DayBox>
                        <DayBox>Q</DayBox>
                        <DayBox>Q</DayBox>
                        <DayBox>S</DayBox>
                        <DayBox>S</DayBox>
                    </DaysContainer>

                    <ButtonsContainer>
                        <SaveButton>Salvar</SaveButton>
                        <CancelButton>Cancelar</CancelButton>
                    </ButtonsContainer>

                </AddHabitContainer>



                <HabitContainer>

                    <HabitTitle>Ler 1 capítulo de livro</HabitTitle>
                    
                    <ion-icon name="trash-outline"></ion-icon>
                    
                    <DaysContainer>
                        <DayBox>D</DayBox>
                        <DayBox>S</DayBox>
                        <DayBox>T</DayBox>
                        <DayBox>Q</DayBox>
                        <DayBox>Q</DayBox>
                        <DayBox>S</DayBox>
                        <DayBox>S</DayBox>
                    </DaysContainer>

                </HabitContainer>

                <HabitContainer>

                    <HabitTitle>Ler 1 capítulo de livro</HabitTitle>
                    
                    <ion-icon name="trash-outline"></ion-icon>
                    
                    <DaysContainer>
                        <DayBox>D</DayBox>
                        <DayBox>S</DayBox>
                        <DayBox>T</DayBox>
                        <DayBox>Q</DayBox>
                        <DayBox>Q</DayBox>
                        <DayBox>S</DayBox>
                        <DayBox>S</DayBox>
                    </DaysContainer>

                </HabitContainer>


                <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>

            </PageContainer>


            <FooterMenu />
        </>
      
    );
}
  



export default HabitsPage;


const PageContainer = styled.div`
    margin-top: 70px;
    padding: 10px 18px 30px 18px;
    margin-bottom: 70px;
    min-height: calc(100vh - 140px);
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
`;

const Title = styled.p`
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 23px;
    color: #126BA5;
`;

const AddButton = styled.div`
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 5px;
    font-size: 27px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Text = styled.p`
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 18px;
    color: #666666;
`;

const AddHabitContainer = styled.div`
    width: 340px;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 18px 16px 15px 19px;
    margin-bottom: 25px;
`;

const AddHabitInput = styled.input`
    width: 303px;
    height: 45px;
    margin-bottom: 10px;
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 5px;
    ::placeholder{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 20px;
        color: #DBDBDB;
    }
`;

const DaysContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const DayBox = styled.div`
    width: 30px;
    height: 30px;
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 20px;
    color: #DBDBDB;
    margin-right: 4px;
`;


const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-top: 25px;
`;

const SaveButton = styled.div`
    width: 84px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CancelButton = styled.p`
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 16px;
    color: #52B6FF;
    margin-right: 20px;
`;

const HabitContainer = styled.div`
    width: 340px;
    height: 91px;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 16px 11px 5px 15px;
    margin-bottom: 10px;
    position: relative;

    ion-icon{
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 20px;
        color: #666666;
    }
`;

const HabitTitle = styled.p`
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 20px;
    color: #666666;
    margin-bottom: 10px;
`;