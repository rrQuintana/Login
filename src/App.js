import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LandingPage from "./components/LandingPage";
import Login from "./components/Login/Login";
import Error404 from "./components/Error404";
import Logged from "./components/Logged";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path="/" element={<Logged user={user} ></Logged>}></Route>
        ) : (
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
        )}
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
