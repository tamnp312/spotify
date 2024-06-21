import React, { useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from "./Components/Home"
import Login from "./Components/Login"
import Player from  "./Components/Player"



function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />} />
      <Route path="/player" element={<Player />} />
    </Routes>
    </div>
  );
}

export default App;
