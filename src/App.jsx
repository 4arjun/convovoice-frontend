import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AudioRecorder from "./components/Processing";
import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import WelcomePage from "./components/Welcome";
import Dashboard from "./components/Dashboard";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/process" element={<AudioRecorder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element= {<WelcomePage />} />
        <Route path="/dashboard" element= {<Dashboard />} />
        <Route path="/privacy/policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
