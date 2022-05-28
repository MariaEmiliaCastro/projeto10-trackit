import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import logo from "../assets/img/trackit.png";
import { ThreeDots } from "react-loader-spinner";

export default function LoginPage (){

    const { token, setToken } = React.useContext(UserContext);
    const {userImage, setUserImage} = React.useContext(UserContext);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();

    const loginUser = (event) => {
        event.preventDefault();
        setLoading(true);
        const payload = {
            email,
            password
        };

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", payload);
        promise.then( response => {
            
            console.log(response.data);
            setToken(response.data.token);
            setUserImage(response.data.image);
            navigate("/habitos");

        })
        .catch(err => {
            setLoading(false);
            alert(err.response.data.message);
            console.log(err);
        })
    }
    return (
        <>
            <Container>
                <img src={logo} alt="logo"/>

                <form onSubmit={loginUser}>
                    <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type="submit" disabled={loading}>{loading ? <ThreeDots height="18" color="white" ariaLabel="loading"/> : "Entrar"}</button>
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
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        
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

    button:disabled,
    button[disabled]{
        background: #86CCFF;
    }
`
