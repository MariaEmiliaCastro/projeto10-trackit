import React from "react";
import styled from "styled-components";

export default function BotaoDiasSemana ({dia, index, diasSelecionados, setDiasSelecionados}) {

    const [selected, setSelected] = React.useState(false);
    const [color, setColor] = React.useState(['#FFF']);
    const [innerColor, setInnerColor] = React.useState(['#DBDBDB'])
    const selecionarDia = () => {
        if(!selected){
            setDiasSelecionados(dias => [...dias, index]);
            setColor("#CFCFCF");
            setInnerColor("#FFF")
            console.log(diasSelecionados);
            setSelected(true);
        }else{
            diasSelecionados.pop();
            setColor("#FFF");
            setInnerColor("#DBDBDB");
            console.log(diasSelecionados);
            setSelected(false);
        }
    }

    return (
        <>
        <Container key={index} onClick={selecionarDia} color={color} innerColor={innerColor}>
            {dia}
        </Container>          
        </>
    )
}

const Container = styled.div`
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