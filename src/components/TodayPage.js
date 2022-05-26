import React from 'react';
import styled from 'styled-components';
import * as dayjs from 'dayjs'
import 'dayjs/locale/pt-br';
import Top from "./Top";
import FooterMenu from "./FooterMenu";

var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);
var updateLocale = require('dayjs/plugin/updateLocale');
dayjs.extend(updateLocale);
dayjs.updateLocale('pt-br', {
    weekdays : ["Domingo" , "Segunda" , "Terça", "Quarta", "Quinta", "Sexta", "Sábado"] 
  });




function TodayPage() {

    const weekday = dayjs().locale("pt-br").format("dddd");
    const day = dayjs().locale("pt-br").format("DD/MM");

    return (
        <>
            <Top />
            
            
            <PageContainer>

                <DayLine>{`${weekday}, ${day}`}</DayLine>

                <ResumeLine>Nenhum hábito concluído ainda</ResumeLine>

                <HabitContainer>
                    <InfosContainer>
                        <HabitLine>Hábito</HabitLine>
                        <HistoryLine>Sequência atual: X dias</HistoryLine>
                        <HistoryLine>Seu recorde: Y dias</HistoryLine>
                    </InfosContainer>
                    <ion-icon name="checkbox"></ion-icon>
                </HabitContainer>

                <HabitContainer>
                    <InfosContainer>
                        <HabitLine>Hábito</HabitLine>
                        <HistoryLine>Sequência atual: X dias</HistoryLine>
                        <HistoryLine>Seu recorde: Y dias</HistoryLine>
                    </InfosContainer>
                    <ion-icon name="checkbox"></ion-icon>
                </HabitContainer>

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
        /* color: #8FC549; */
        color: #EBEBEB;
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
`;
