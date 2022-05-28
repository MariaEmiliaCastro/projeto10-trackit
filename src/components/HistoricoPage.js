import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import TopBar from "./TopBar";
import Footer from "./Footer";

export default function HistoricoPage () {

    const { token } = React.useContext(UserContext);
    const { userImage, setUserImage} = React.useContext(UserContext);

    return(
        <Container>
            <TopBar profilePic={userImage}/>
            <div className="title">
                <h1>Histórico</h1>
            </div>
            <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
            <Footer />
        </Container>
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