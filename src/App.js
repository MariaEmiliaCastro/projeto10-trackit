import "./assets/css/reset.css";
import "./assets/css/fonts.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import UserContext from "./context/UserContext";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import HabitsPage from "./components/HabitsPage";
import HojePage from "./components/HojePage";
import HistoricoPage from "./components/HistoricoPage";

function App() {

  const [token, setToken] = React.useState('');
  const [userImage, setUserImage] = React.useState('');
  const [ meusHabitos, setMeusHabitos ] = React.useState([]);
  const [listDeHabitos, setListaDeHabitos] = React.useState([]);
  const [ qtdHabitos , setQtdHabitos ] = React.useState(null);
  const [ habitosDoDiaTotal, setHabitosDoDiaTotal] = React.useState(null);

  return (
    <>
      <UserContext.Provider value={{token, setToken, userImage, setUserImage, meusHabitos, setMeusHabitos, listDeHabitos, setListaDeHabitos, qtdHabitos , setQtdHabitos, habitosDoDiaTotal, setHabitosDoDiaTotal}}>
        <BrowserRouter>
          <Routes>
            <Route  path="/" element={<LoginPage/>}/>
            <Route path="/cadastro" element={<RegisterPage />} />
            <Route path="/habitos" element={<HabitsPage />} />
            <Route path="/hoje" element={<HojePage />} />
            <Route path="/historico" element={<HistoricoPage/>} />
          </Routes>
        </BrowserRouter>
		  </UserContext.Provider>
    </>
  );
}

export default App;
