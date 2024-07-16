import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Landing";
import AudioRecorder from "./components/Processing";
import Login from "./components/Login";
import React, { useState } from 'react';


function App() {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/process" element={<AudioRecorder />} />
      </Routes>
    </Router>
  );
}

export default App;
