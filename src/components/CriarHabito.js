import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import TopBar from "./TopBar";
import Footer from "./Footer";
import CardHabito from "./CardHabito";
import BotaoDiasSemana from "./BotaoDiasSemana";
import { ThreeDots } from "react-loader-spinner";

export default function CriarHabito (props) {

    const diasSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    
    const [diasSelecionados, setDiasSelecionados] = React.useState([]);
    const [disable, setDisable] = React.useState(false);
    const { token } = React.useContext(UserContext);
    const { meusHabitos, setMeusHabitos } = React.useContext(UserContext);
    

    const enviarHabito = (e) => {
        setDisable(true);
        e.preventDefault();
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const data = {
            name: props.nomeHabito,
            days: diasSelecionados
        }

        const promise = axios.post(URL, data, config);
        promise.then(res => {
            props.setNomeHabito('');
            props.setMostrarCardCadastro(!props.mostrarCardCadastro);
     
            setMeusHabitos(oldHabits => [...oldHabits, res.data]);
            console.log("Habito depois de adicionar ", meusHabitos);    
        })
        .catch(err => {
            alert("Erro ao adicionar hábito!");
            setDisable(false);
            console.log(err.data);
        })
    }

    return (
        <>
            <Container>
                <form onSubmit={enviarHabito}>
                    <input type="text" placeholder="nome do habito" required value={props.nomeHabito} onChange={(e) => props.setNomeHabito(e.target.value)}/>
                    <div style={{display: 'flex'}}>
                        {diasSemana.map((dia, index) => <BotaoDiasSemana dia={dia} index={index} key={index} diasSelecionados={diasSelecionados} setDiasSelecionados={setDiasSelecionados}/>)}
                    </div>
                    <Buttons>
                        <button type="cancel" className="cancel" onClick={() => props.setMostrarCardCadastro(!props.mostrarCardCadastro)}>Cancelar</button>
                        <button type="submit" disabled={disable} className="save">{disable ? <ThreeDots height="14" color="white" ariaLabel="loading"/> : "Salvar"}</button>
                    </Buttons>                   
                </form>
            </Container>
        </>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 180px;
    margin-top: 20px;
    margin-bottom: 20px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
    }
    form > input {
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 10px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;

        color: #666666;


    }

    form > input::placeholder {
        color: #DBDBDB;
    }
    
`

const Buttons = styled.div`
    margin-top: 34px;
    display: flex;
    justify-content: end;
    align-items: end;
    .cancel {
        width: 84px;
        height: 35px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;

        text-align: center;
        background-color: #FFF;
        border: none;
        color: #52B6FF;
    }

    .save {
        width: 84px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        border: none;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #FFF;
    }

    button:disabled,
    button[disabled]{
        background: #86CCFF;
    }
`