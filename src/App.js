import './App.css';
import { Route, Routes } from "react-router-dom";
import React, { lazy } from "react";

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" exact element={<Home />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
