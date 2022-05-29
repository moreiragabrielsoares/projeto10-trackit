import { React , useState, useContext , useEffect } from 'react';
import UserContext from '../contexts/UserContext'
import styled from 'styled-components';
import axios from 'axios';
import { ThreeDots } from  'react-loader-spinner'


import Top from "./Top";
import FooterMenu from "./FooterMenu";




function AddHabitContainerComponent ({setShowForm, habitObj, setHabitObj, setHabitsList, habitsList, isFormDisabled, setIsFormDisabled}) {

    const {token, setToken, userImg, setUserImg} = useContext(UserContext);
    
    function selectDay (dayN) {
        const newArr = habitObj.daysWeek;
        const temp = newArr[dayN].selected;
        newArr[dayN].selected = !temp;
        setHabitObj({...habitObj, daysWeek: newArr});
    }

    function sendHabit () {
        
        if (habitObj.name === "") {
            alert("Nome do hábito não pode ser vazio!");
            return;
        }
        
        const sendHabitObj = {name: habitObj.name, days: []};
        for (let i = 0 ; i < 7 ; i ++) {
            if (habitObj.daysWeek[i].selected) {
                sendHabitObj.days.push(i);
            }
        }

        if (sendHabitObj.days.length === 0) {
            alert("Pelo menos 1 dia da semana deve ser selecionado!");
            return;
        }

        setIsFormDisabled(true);
        
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", sendHabitObj, config);

        request.then(success);

        function success (res) {
            const newArr = habitsList;
            newArr.push(res.data);
            setHabitsList(newArr);
            setHabitObj({
                name:"", 
                daysWeek: [
                    {day: "D", n: 0, selected:false},
                    {day: "S", n: 1, selected:false}, 
                    {day: "T", n: 2, selected:false},
                    {day: "Q", n: 3, selected:false},
                    {day: "Q", n: 4, selected:false},
                    {day: "S", n: 5, selected:false},
                    {day: "D", n: 6, selected:false}]
            });
            setShowForm(false);
            setIsFormDisabled(false);
        }

        request.catch(errorTreatment);

        function errorTreatment(error) {
            alert(error.response.data.message);
            setHabitObj({
                name:"", 
                daysWeek: [
                    {day: "D", n: 0, selected:false},
                    {day: "S", n: 1, selected:false}, 
                    {day: "T", n: 2, selected:false},
                    {day: "Q", n: 3, selected:false},
                    {day: "Q", n: 4, selected:false},
                    {day: "S", n: 5, selected:false},
                    {day: "S", n: 6, selected:false}]
            });
            setIsFormDisabled(false);
        }
    
    }
    
    
    return (
        <AddHabitContainer style={isFormDisabled ? {pointerEvents: "none", opacity: "0.6"} : {}}>
            
            <AddHabitInput
                placeholder='nome do hábito'
                onChange={e => setHabitObj({...habitObj, name: e.target.value})} 
                value={habitObj.name}
                disabled={isFormDisabled}
            />

            <DaysContainer>
                {habitObj.daysWeek.map(dayWeek => <DayBox 
                    isSelected={dayWeek.selected} 
                    onClick={() => selectDay(dayWeek.n)}
                    key={dayWeek.n}
                    >{dayWeek.day}</DayBox>)}
            </DaysContainer>

            <ButtonsContainer>


            {isFormDisabled ? 
                (<SaveButton>
                    <ThreeDots color="#FFFFFF" height={50} width={50} />
                </SaveButton>) 
                : (<SaveButton onClick={sendHabit}>Salvar</SaveButton>)
            }


                <CancelButton onClick={() => setShowForm(false)}>Cancelar</CancelButton>
            </ButtonsContainer>
            

        </AddHabitContainer>
    )
}



function HabitContainerComponent ({name , days , habitId, setControlEffect}) {

    const {token, setToken, userImg, setUserImg, percentageProgress, setPercentageProgress} = useContext(UserContext);

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }


    const [control, setControl] = useState(0);

    function deletHabit (habitId) {

        const response = window.confirm("Deseja realmente apagar?");

        if (response) {
            const request = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`, config);

            request.then(success);

            function success (res) {
                setControlEffect(prevState => prevState + 1);
                setControl(prevState => prevState + 1)
            }

            request.catch((err) => console.log(err.response.data));
        }
    }


    useEffect(() => {

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

		const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
		promisse.then(success);
        function success (res) {
            const habitsList = res.data;
            
            let nDone = 0;
            let nTotal = 0;
            for (let i = 0 ; i < habitsList.length ; i++) {
                nTotal++;
                if (habitsList[i].done) {
                    nDone++;
                }
            }
    
            if (nTotal === 0) {
                return;
            }
            
            const result = Math.round(nDone/nTotal*100);
            setPercentageProgress(result);
        }
        
        promisse.catch((erro) => {alert(erro.response.data.message)});
	}, [control]);


    return (
        <HabitContainer>

            <HabitTitle>{name}</HabitTitle>
            
            <ion-icon name="trash-outline" onClick={() => deletHabit(habitId)}></ion-icon>
            
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

    const [controlEffect, setControlEffect] = useState(0);

    const [isFormDisabled, setIsFormDisabled] = useState(false);

    const [habitsList, setHabitsList] = useState([]);

    const [habitObj, setHabitObj] = useState({
        name:"", 
        daysWeek: [
            {day: "D", n: 0, selected:false},
            {day: "S", n: 1, selected:false}, 
            {day: "T", n: 2, selected:false},
            {day: "Q", n: 3, selected:false},
            {day: "Q", n: 4, selected:false},
            {day: "S", n: 5, selected:false},
            {day: "S", n: 6, selected:false}]
    });
    
    useEffect(() => {

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

		const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
		promisse.then(success);
        promisse.catch((erro) => {alert(erro.response.data.message)});
	}, [controlEffect]);


    function success (res) {
        //console.log(res.data);
        setHabitsList(res.data);
    }
    
    const verifyListHabits = checkListHabits ();
    function checkListHabits () {

        if (habitsList.length === 0) {
            return <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
        } else {
            return habitsList.map(habit => <HabitContainerComponent key={habit.id} habitId={habit.id} name={habit.name} days={habit.days} setControlEffect={setControlEffect}/>)
        }

    }

    const verifyAddHabit = checkAddHabit ();
    function checkAddHabit () {

        if (showForm) {
            return <AddHabitContainerComponent setShowForm={setShowForm} habitObj={habitObj} setHabitObj={setHabitObj} setHabitsList={setHabitsList} habitsList={habitsList} isFormDisabled={isFormDisabled} setIsFormDisabled={setIsFormDisabled}/>
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
    opacity: 0.8;
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
    :hover{
        cursor: pointer;
    }
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
        :hover{
        cursor: pointer;
        }
    }
`;

const HabitTitle = styled.p`
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 20px;
    color: #666666;
    margin-bottom: 10px;
`;