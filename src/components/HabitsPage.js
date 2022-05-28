import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import TopBar from "./TopBar";
import Footer from "./Footer";
import CardHabito from "./CardHabito";
import CriarHabito from "./CriarHabito";

export default function HabitsPage() {

    const { token } = React.useContext(UserContext);
    const { userImage, setUserImage} = React.useContext(UserContext);
    const [nomeHabito, setNomeHabito] = React.useState('');
    const { meusHabitos, setMeusHabitos } = React.useContext(UserContext);
    const [mostrarCardCadastro, setMostrarCardCadastro] = React.useState(false);
    const [atualizarPagina, setAtualizarPagina] = React.useState(false);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    React.useEffect(() => {
        
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
        promise.then( res => {
            if(res.data.length > 0){
                console.log("Carregou a pagina!")
                setMeusHabitos(res.data);
            }else{
                console.log("Sem Atividades Cadastradas!");
            }
            
        })
        .then(err => {
            console.log(err.data);
        })
    }, []);

    function loadHabits() {
        if(meusHabitos.length === 0){
            return <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>
        }else{
            console.log(meusHabitos)
            return (meusHabitos.map(({id, name, days}, index) => <CardHabito id={id} name={name} days={days} key={index}/>)) 
        }            
    }

    const mostraHabitos = loadHabits();

    
    return (
        <>
            <Container>
                <TopBar profilePic={userImage}/>
                
                <div className="title">
                    <h1>Meus habitos</h1>
                    <div className="btn" onClick={() => setMostrarCardCadastro(!mostrarCardCadastro)}>+</div>
                </div>
                {mostrarCardCadastro ? 
                    <CriarHabito setMostrarCardCadastro={setMostrarCardCadastro} mostrarCardCadastro={mostrarCardCadastro} nomeHabito={nomeHabito} setNomeHabito={setNomeHabito}/> : 
                    <></>
                }
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

    div > .btn {
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        
        color: #FFFFFF;
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

    // .topo {
    //     position: relative;
    //     top: 0;
    //     left: 0;
    //     z-index:1;
    // }
`
