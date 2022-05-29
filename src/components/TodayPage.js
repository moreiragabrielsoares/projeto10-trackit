import { React , useContext , useEffect , useState} from 'react';
import UserContext from '../contexts/UserContext';
import styled from 'styled-components';
import * as dayjs from 'dayjs'
import 'dayjs/locale/pt-br';
import Top from "./Top";
import FooterMenu from "./FooterMenu";
import axios from 'axios';

var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);
var updateLocale = require('dayjs/plugin/updateLocale');
dayjs.extend(updateLocale);
dayjs.updateLocale('pt-br', {
    weekdays : ["Domingo" , "Segunda" , "Terça", "Quarta", "Quinta", "Sexta", "Sábado"] 
});





function HabitContainerComponent ({habitId , name , isDone , currentSequence , highestSequence , setControlEffect}) {
    
    const {token, setToken, userImg, setUserImg} = useContext(UserContext);

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    
    function checkDoneHabit (habitId, isDone) {
        console.log(habitId);

        
        if (isDone) {
            const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/uncheck`, null, config);

            request.then(success);

            request.catch((err) => console.log(err.response.data));

        } else {
            const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/check`, null, config);

            request.then(success);

            request.catch((err) => console.log(err.response.data));
        }


        function success (res) {
            console.log(res.data);
            setControlEffect(prevState => prevState + 1)
        }

    }
    
    
    return(
        <HabitContainer isDone={isDone}>
            <InfosContainer>
                <HabitLine>{name}</HabitLine>
                <HistoryLine isDone={isDone}>Sequência atual: <span>{`${currentSequence} dias`}</span></HistoryLine>
                <HistoryLine isDone={(currentSequence === highestSequence) && (highestSequence > 0)}>Seu recorde: <span>{`${highestSequence} dias`}</span></HistoryLine>
            </InfosContainer>
            <ion-icon name="checkbox" isDone={isDone} onClick={() => checkDoneHabit(habitId, isDone)}></ion-icon>
        </HabitContainer>
    )
}



function TodayPage() {

    const weekday = dayjs().locale("pt-br").format("dddd");
    const day = dayjs().locale("pt-br").format("DD/MM");


    const {token, setToken, userImg, setUserImg, percentageProgress, setPercentageProgress} = useContext(UserContext);
    const [controlEffect, setControlEffect] = useState(0);

    const [habitsList, setHabitsList] = useState([]);



    useEffect(() => {

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

		const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
		promisse.then(success);
        promisse.catch((erro) => {alert(erro.response.data.message)});
	}, [controlEffect]);


    function success (res) {
        setHabitsList(res.data);
    }



    const verifyListHabits = checkListHabits ();
    function checkListHabits() {

        if (habitsList.length === 0) {
            return <Text>Você não tem nenhum hábito para o dia de hoje! </Text>
        } else {
            return habitsList.map(habit => <HabitContainerComponent key={habit.id} habitId={habit.id} name={habit.name} isDone={habit.done} currentSequence={habit.currentSequence} highestSequence={habit.highestSequence} setControlEffect={setControlEffect}/>)
        }

    }


    const verifyResume = checkProgress();
    function checkProgress() {
        let nDone = 0;
        let nTotal = 0;
        for (let i = 0 ; i < habitsList.length ; i++) {
            nTotal++;
            if (habitsList[i].done) {
                nDone++;
            }
        }

        if (nTotal === 0) {
            return <ResumeLine>Nenhum hábito concluído ainda</ResumeLine>
        }
        
        const result = Math.round(nDone/nTotal*100);
        setPercentageProgress(result);

        if (result === 0) {
            return <ResumeLine>Nenhum hábito concluído ainda</ResumeLine>
        }

        return <ResumeLine>{`${percentageProgress}% dos hábitos concluídos`}</ResumeLine>
    }


    return (
        <>
            <Top />
            
            
            <PageContainer>

                <DayLine>{`${weekday}, ${day}`}</DayLine>

                {verifyResume}

                {verifyListHabits}

            </PageContainer>


            <FooterMenu />
        </>
    );
}
  



export default TodayPage;


const PageContainer = styled.div`
    margin-top: 70px;
    padding: 10px 18px 30px 18px;
    margin-bottom: 70px;
    min-height: calc(100vh - 140px);
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
`;

const DayLine = styled.p`
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
    /* color: #BABABA; */
    color: #8FC549;
    margin-top: 5px;
    margin-bottom: 28px;
`;

const HabitContainer = styled.div`
    width: 340px;
    height: 94px;
    background-color: #FFFFFF;
    margin: 0 auto 10px auto;
    padding: 13px 13px 12px 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;

    ion-icon {
        font-size: 69px;
        /* color: #8FC549; #EBEBEB;*/
        color: ${props => props.isDone ? "#8FC549" : "#EBEBEB"};
        :hover{
            cursor: pointer;
        }
    }
`;

const InfosContainer = styled.div`
`;

const HabitLine = styled.p`
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 20px;
    color: #666666;
    margin-bottom: 7px;
`;

const HistoryLine = styled.p`
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 13px;
    color: #666666;
    margin-bottom: 3px;

    span {
        color: ${props => props.isDone ? "#8FC549" : "#666666"};
        /* color: #666666; #8FC549*/
    }
`;


const Text = styled.p`
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 18px;
    color: #666666;
`;