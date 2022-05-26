import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import TopBar from "./TopBar";

export default function HabitsPage() {

    const { token, setToken } = React.useContext(UserContext);


    
    return (
        <>
            <TopBar profilePic="https://sm.ign.com/t/ign_pt/news/c/captain-ma/captain-marvel-gets-new-poster-trailer-coming-tomorrow_va6t.h720.jpg"/>
        </>
    )
}