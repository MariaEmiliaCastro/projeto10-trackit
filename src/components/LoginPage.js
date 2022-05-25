import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../assets/img/trackit.png"

export default function LoginPage (props){

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const loginUser = (event) => {
        event.preventDefault();
        const payload = {
            email,
            password
        };

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", payload);
        promise.then( response => {
            console.log(response.data);
            props.setToken(response.data.token);
        })
    }
    return (
        <>
            <Container>
                <img src={logo} alt="logo"/>

                <form onSubmit={loginUser}>
                    <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type="submit">Entrar</button>
                </form>
                <Link to="/cadastro">
                    <div className="link">Não tem uma conta? Cadastre-se!</div>
                </Link>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    img {
        margin-bottom: 34px;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    form > input {
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
        padding-left: 10px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
    }

    form > input::placeholder {
        color: #DBDBDB;
    }

    form > button {
        height: 45px;
        margin-bottom: 26px;
        background: #52B6FF;
        border-radius: 5px;
        border: none;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        
        color: #FFFFFF;
    }

    .link {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;

        color: #52B6FF;
    }
`
