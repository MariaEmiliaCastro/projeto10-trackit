import React from "react";
import styled from "styled-components";
import axios from "axios";
import BotaoDiasSemana from "./BotaoDiasSemana";
import UserContext from "../context/UserContext";

export default function CardHabito ({id, name, days}) {

    const diasSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const { token } = React.useContext(UserContext);
    const { meusHabitos, setMeusHabitos } = React.useContext(UserContext);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    function excluirHabito (){
        const choice = window.confirm("Deseja mesmo excluir este habito?");
        if(choice){
            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config);
            promise.then(res => {
                setMeusHabitos(meusHabitos.filter(item => item.id !== id));
            })
            .catch(err => {
                console.log("ISSUE WITH DELETING HABIT! ", err.data);
            })
        }
        
    }

    return (
        <Container>
            <Titulo>
                <div>
                    {name}
                </div>
                <div onClick={excluirHabito}>
                    <ion-icon name="trash-outline"></ion-icon>
                </div>
            </Titulo>
            <div style={{display: 'flex'}}>
                {diasSemana.map((dia, index) => {
                    if(days.includes(index)){
                        return (<DiasSemana key={index} color="#CFCFCF" innerColor="#FFF">{dia}</DiasSemana>);
                    }else{
                        return (<DiasSemana key={index} color="#FFF" innerColor="#DBDBDB">{dia}</DiasSemana>);
                    }
                })}
            </div>
        </Container>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 5px;
    padding-top: 10px;
    padding-left: 16px;
    padding-right: 10px;
`

const Titulo = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;

    color: #666666;
`

const DiasSemana = styled.div`
    width: 30px;
    height: 30px;
    background: ${props => props.color};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 10px;
    margin-right: 4px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;

    color: ${props => props.innerColor};
`