import React from "react";
import styled from "styled-components";
import axios from "axios";
import BotaoDiasSemana from "./BotaoDiasSemana";
import UserContext from "../context/UserContext";

export default function HabitoDeHoje (props) {

    const { token } = React.useContext(UserContext);
    const {listDeHabitos, setListaDeHabitos} = React.useContext(UserContext);
    const { qtdHabitos , setQtdHabitos } = React.useContext(UserContext);
    const [checked, setChecked] = React.useState(props.done);
    const [color, setColor] = React.useState("#EBEBEB");
    const [colorLettering, setColorLettering] = React.useState("#666666")

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const data = {}

    React.useEffect(() => {
        if(props.done){
            setColorLettering("#8FC549");
            setColor("#8FC549");
        }
    }, []);

    function completeHabit () {
        if(!checked){
            console.log(props.id);

            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/check`, data, config);
            promise.then( res => {
                setChecked(true);
                setColorLettering("#8FC549");
                setColor("#8FC549");
                const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
                promise.then( res => {
                    if(res.data.length > 0){
                        setListaDeHabitos(res.data);
                    }
                })
            })
        }else{
            console.log(props.id);
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/uncheck`, data, config);
            promise.then( res => {
                setChecked(false);
                setColorLettering("#666666");
                setColor("#EBEBEB");
                const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
                promise.then( res => {
                    if(res.data.length > 0){
                        setListaDeHabitos(res.data);
                    }
                })
            })            
        }
    }

    return (
        <>
            <Container>
                <div>
                    <Title>{props.name}</Title>
                    <div className="sub-title">
                        Sequência atual: <SubTitle color={colorLettering} >{props.currentSequence}</SubTitle>
                    </div>
                    <div className="sub-title">
                        Seu recorde: <SubTitle color={colorLettering} >{props.highestSequence}</SubTitle>
                    </div>
                    
                </div>
                <div className="check-icon" onClick={completeHabit}>
                    <ion-icon name="checkbox" style={{color: color}}></ion-icon>
                </div>

            </Container>
        </>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 94px;
    margin-bottom: 10px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;

    .check-icon {
        font-size: 70px;
    }

    .sub-title {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        margin-bottom: 3px;
        color: #666666;
    }
`

const Title = styled.div`

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    /* identical to box height */
    margin-bottom: 10px;

    color: #666666;
`

const SubTitle = styled.span`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    margin-bottom: 3px;
    color: ${props => props.color};
`