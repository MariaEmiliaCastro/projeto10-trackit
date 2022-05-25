import "./assets/css/reset.css";
import "./assets/css/fonts.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import UserContext from "./context/UserContext";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

function App() {

  const [token, setToken] = React.useState('');

  return (
    <>
      <UserContext.Provider value={{token, setToken}}>
        <BrowserRouter>
          <Routes>
            <Route  path="/" element={<LoginPage setToken={setToken}/>}/>
            <Route path="/cadastro" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
		  </UserContext.Provider>
    </>
  );
}

export default App;
