import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import TopBar from "./TopBar";
import Footer from "./Footer";
import dayjs from "dayjs";
import CardHabito from "./CardHabito";
import HabitoDeHoje from "./HabitoDeHoje";

export default function HojePage (){

    const { token } = React.useContext(UserContext);
    const { userImage, setUserImage } = React.useContext(UserContext);
    const [ qtdHabitos , setQtdHabitos ] = React.useState(null);
    const [listDeHabitos, setListaDeHabitos] = React.useState([]);

    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    React.useEffect(() => {
        
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
        promise.then( res => {
            if(res.data.length > 0){
                console.log("Carregou a pagina!")
                console.log(res.data);
                setListaDeHabitos(res.data);
                setQtdHabitos(res.data.length);
            }
            
        })
        .then(err => {
            console.log(err.data);
        })
    }, []);

    function loadHabits() {
        if(listDeHabitos.length === 0){
            return <h2>Você não tem nenhum hábito cadastrado para o dia de hoje!</h2>
        }else{
            console.log(listDeHabitos)
            return listDeHabitos.map(({id, name, currentSequence, highestSequence, done}) => <HabitoDeHoje name={name} currentSequence={currentSequence} highestSequence={highestSequence} done={done} id={id} key={id}/>)
        }            
    }

    const mostraHabitos = loadHabits();

    return (
        <>
            <Container>
                <TopBar profilePic={userImage}/>

                <div className="title">
                    <h1>{days[dayjs().day()]}, {dayjs().date()} {months[dayjs().month()]}</h1>
                </div>
                
                <div style={{height:'90%', overflow: "auto"}}>
                    {mostraHabitos}
                </div>
                <Footer />
            </Container>
        </>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    background-color: #F2F2F2;
    padding-top: 98px;
    padding-bottom: 98px;
    padding-left: 15px;
    padding-right: 15px;

    .title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    div > h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        color: #126BA5;
    }

    h2 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;

        color: #666666;

        margin-top: 28px;
    }
`