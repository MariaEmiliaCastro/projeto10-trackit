import "./assets/css/reset.css";
import "./assets/css/fonts.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import UserContext from "./context/UserContext";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import HabitsPage from "./components/HabitsPage";

function App() {

  const [token, setToken] = React.useState('');
  const [userImage, setUserImage] = React.useState('');
  const [ meusHabitos, setMeusHabitos ] = React.useState([]);

  return (
    <>
      <UserContext.Provider value={{token, setToken, userImage, setUserImage, meusHabitos, setMeusHabitos}}>
        <BrowserRouter>
          <Routes>
            <Route  path="/" element={<LoginPage/>}/>
            <Route path="/cadastro" element={<RegisterPage />} />
            <Route path="/habitos" element={<HabitsPage />} />
          </Routes>
        </BrowserRouter>
		  </UserContext.Provider>
    </>
  );
}

export default App;
