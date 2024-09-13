import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AudioRecorder from "./components/Processing";
import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import WelcomePage from "./components/Welcome";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/process" element={<AudioRecorder />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element= {<WelcomePage />} />
        <Route path="/dashboard" element= {<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
