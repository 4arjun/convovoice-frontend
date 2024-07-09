import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Landing";
import AudioRecorder from "./components/processing";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/process" element={<AudioRecorder />} />
      </Routes>
    </Router>
  );
}

export default App;
