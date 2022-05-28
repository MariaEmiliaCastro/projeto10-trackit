import logo from "../assets/img/trackit.png";
import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function RegisterPage (){

    const [email, setEmail] = React.useState ('');
    const [password, setPassword] = React.useState ('');
    const [name, setName] = React.useState ('');
    const [image, setImage] = React.useState ('');
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();

    const sendForm = (event) => {
        event.preventDefault();
        setLoading(true);
        const data = {
            email,
            name,
            image,
            password
        }

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", data);
        promise.then(response => {
            console.log(response.data);
            navigate("/");
        })

        promise.catch(err => {
            console.log(err);
        })
    }
    return (
        <>
            <Container>
                <img src={logo} alt="logo" />

                <form onSubmit={sendForm}>
                    <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)}/>
                    <input type="text" placeholder="nome" value={name} onChange={e => setName(e.target.value)}/>
                    <input type="text" placeholder="foto" value={image} onChange={e => setImage(e.target.value)}/>
                    <button type="submit" disabled={loading}>{loading ? <ThreeDots height="18" color="white" ariaLabel="loading"/> : "Entrar"}</button>
                </form>
                <Link to="/">
                    <div className="link">Já tem uma conta? Faça login!</div>
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

    button:disabled,
    button[disabled]{
        background: #86CCFF;
    }
`