import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AudioRecorder from "./components/Processing";
import Login from "./components/Login";
import React, { useState } from 'react';
import Login2 from "./components/Login2";

function App() {


  return (
      <Router>
        <Routes>
          <Route path="/" element={<AudioRecorder />} />
          <Route path="/login" element={<Login2/>} />
        </Routes>
      </Router>
  );
}

export default App;
