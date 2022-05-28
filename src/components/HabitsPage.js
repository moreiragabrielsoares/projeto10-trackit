import { React , useState, useContext , useEffect } from 'react';
import UserContext from '../contexts/UserContext'
import styled from 'styled-components';
import axios from 'axios';


import Top from "./Top";
import FooterMenu from "./FooterMenu";






function AddHabitContainerComponent ({setShowForm}) {



    return (
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
                <CancelButton onClick={() => setShowForm(false)}>Cancelar</CancelButton>
            </ButtonsContainer>

        </AddHabitContainer>
    )
}



function HabitContainerComponent ({name , days}) {

    return (
        <HabitContainer>

            <HabitTitle>{name}</HabitTitle>
            
            <ion-icon name="trash-outline"></ion-icon>
            
            <DaysContainer>
                <DayBox isSelected={days.some(e => e === 0)}>D</DayBox>
                <DayBox isSelected={days.some(e => e === 1)}>S</DayBox>
                <DayBox isSelected={days.some(e => e === 2)}>T</DayBox>
                <DayBox isSelected={days.some(e => e === 3)}>Q</DayBox>
                <DayBox isSelected={days.some(e => e === 4)}>Q</DayBox>
                <DayBox isSelected={days.some(e => e === 5)}>S</DayBox>
                <DayBox isSelected={days.some(e => e === 6)}>S</DayBox>
            </DaysContainer>

        </HabitContainer>
    )




}










function HabitsPage() {
    
    const {token, setToken, userImg, setUserImg} = useContext(UserContext);
    
    const [showForm, setShowForm] = useState(false);

    const [habitsList, setHabitsList] = useState([]);
    
    useEffect(() => {

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

		const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
		promisse.then(success);
        promisse.catch((erro) => {console.log(erro.response.data)}) //alert(erro.response.data.message)});
	}, []);


    function success (res) {
        //console.log(res.data);
        //setHabitsList(res.data);
        setHabitsList([
            {
                id: 1,
                name: "Nome do hábito",
                days: [1, 3, 5]
            },
            {
                id: 2,
                name: "Nome do hábito 2",
                days: [1, 3, 4, 6]
            }
        ]);
    }

    
    const verifyListHabits = checkListHabits ();
    function checkListHabits () {

        if (habitsList.length === 0) {
            return <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
        } else {
            return habitsList.map(habit => <HabitContainerComponent name={habit.name} days={habit.days}/>)
        }

    }



    const verifyAddHabit = checkAddHabit ();
    function checkAddHabit () {

        if (showForm) {
            return <AddHabitContainerComponent setShowForm={setShowForm}/>
        }
    }


    return (
        <>
            <Top />
            
            
            <PageContainer>

                <TitleContainer>
                    <Title>Meus hábitos</Title>
                    <AddButton onClick={() => setShowForm(true)}>+</AddButton>
                </TitleContainer>
                
                {verifyAddHabit}

                {verifyListHabits}

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
    :hover{
        cursor: pointer;
    }
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
    background-color: ${props => props.isSelected ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 20px;
    color: ${props => props.isSelected ? "#FFFFFF" : "#DBDBDB"};
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
    :hover{
        cursor: pointer;
    }
`;

const CancelButton = styled.p`
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 16px;
    color: #52B6FF;
    margin-right: 20px;
    :hover{
        cursor: pointer;
    }
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