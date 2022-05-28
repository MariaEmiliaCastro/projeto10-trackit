import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import trackit from "../assets/img/trackit2.png"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer (){

    const { qtdHabitos } = React.useContext(UserContext);
    const { habitosDoDiaTotal } = React.useContext(UserContext);

    return (
        <>
            <Container>
                <StyledLink to="/habitos" style={{ textDecoration: 'none' }}>Hábitos</StyledLink>
                <StyledLink to="/hoje" style={{ textDecoration: 'none' }}>
                    <div className="circular-progress-bar">
                        <CircularProgressbar background={true} value={((qtdHabitos)/habitosDoDiaTotal) * 100} text="Hoje" backgroundPadding={6}
                            styles={{
                                background: {
                                    margin: '15px',
                                    fill: '#52B6FF',
                                },
                                path: {
                                    stroke: '#FFFFFF'
                                },
                                text : {
                                    fill: '#FFFFFF'
                                },
                                trail: {
                                    stroke: '#52B6FF',
                                },
                            }}
                        />
                    </div>
                </StyledLink>           
                <StyledLink to="/historico" style={{ textDecoration: 'none' }}>Histórico</StyledLink>
            </Container>
        </>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 34px;
    padding-right: 34px;
    z-index:2;
    background-color: #FFF;


    .circular-progress-bar {
        width: 91px;
        height: 91px;
        background-color: #52B6FF;
        border-radius: 100%;
        margin-bottom: 50px; 
        
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
    }
`

const StyledLink = styled(Link)`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    
    color: #52B6FF;
`