import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AudioRecorder from "./components/Processing";
import React from 'react';
import Login from "./components/Login";

function App() {


  return (
      <Router>
        <Routes>
          <Route path="/process" element={<AudioRecorder />} />
          <Route path="/" element={<Login/>} />
        </Routes>
      </Router>
  );
}

export default App;
