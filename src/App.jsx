import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AudioRecorder from "./components/Processing";
import Login from "./components/Login";
import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Router>
        <header>
          <button onClick={toggleDarkMode} className="toggle-dark-mode">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>
        <Routes>
          <Route path="/" element={<AudioRecorder />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
