import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import trackit from "../assets/img/trackit2.png"

export default function TopBar(props) {
    return (
        <>
            <Container>
                <div>
                    <img src={trackit} alt="trackit logo"/>
                </div>
                <div>
                    <img className="profilePic" src={props.profilePic} alt="foto de perfil" />
                </div>
            </Container>
        </>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    padding-left: 18px;
    padding-right: 18px;
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .profilePic {
        width: 51px;
        height: 51px;
        border-radius: 100%;
    }
`