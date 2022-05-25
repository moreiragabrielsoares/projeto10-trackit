import React from 'react';
import styled from 'styled-components';



import Top from "./Top";
import FooterMenu from "./FooterMenu";


function TodayPage() {
    return (
        <>
            <Top />
            
            
            <PageContainer>

                <HabitContainer>
                    Habito
                </HabitContainer>

                <HabitContainer>
                    Habito
                </HabitContainer>

                <HabitContainer>
                    Habito
                </HabitContainer>

                <HabitContainer>
                    Habito
                </HabitContainer>

                <HabitContainer>
                    Habito
                </HabitContainer>

                <HabitContainer>
                    Habito
                </HabitContainer>

                <HabitContainer>
                    Habito
                </HabitContainer>

                <HabitContainer>
                    Habito
                </HabitContainer>

                <HabitContainer>
                    Habito
                </HabitContainer>

                <HabitContainer>
                    Habito
                </HabitContainer>

                <HabitContainer>
                    Habito
                </HabitContainer>

            </PageContainer>


            <FooterMenu />
        </>
    );
}
  



export default TodayPage;


const PageContainer = styled.div`
    margin-top: 70px;
    padding: 10px 0 30px 0;
    margin-bottom: 70px;
    min-height: calc(100vh - 140px);
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HabitContainer = styled.div`
    width: 340px;
    height: 94px;
    background-color: #FFFFFF;
    margin-bottom: 10px;
`;