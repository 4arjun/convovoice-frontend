import "./Login.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormPopup from "./FormPopUp";

const Login = ({ setToken }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Perform the login request
      const response = await axios.post("http://localhost:8000/api/token/", {
        username,
        password,
      });

      // Check if the response status is OK (200 range)
      if (response.status == 200) {
        const token = response.data.access;
        localStorage.setItem("token", token);
        setToken(token);
        setError(null);
        navigate("/"); // Redirect after login
      } else {
        // Handle non-200 status codes
        setError("Invalid credentials");
      }
    } catch (err) {
      // Handle error responses (like network issues)
      setError("Invalid credentials");
    }
  };
  return (
    <div>
      <button className="login-btn" onClick={togglePopup}>
        LOG IN
      </button>
      {isPopupVisible && <FormPopup closePopup={togglePopup} />}
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
