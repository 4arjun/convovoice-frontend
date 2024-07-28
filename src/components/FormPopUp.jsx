import React, { useState } from "react";
import "./FormPopup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Ensure axios is imported

const FormPopup = ({ closePopup }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Added to handle errors
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
      if (response.status === 200) {
        const token = response.data.access;
        localStorage.setItem("token", token);
        setError(null); // Reset error
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
    <div className={`form-popup ${isSignup ? "show-signup" : "show-login"}`}>
      <span className="close-btn material-symbols-rounded" onClick={closePopup}>
        close
      </span>
      <div className="form-box login">
        <div className="form-details">
          <h2>Welcome Back</h2>
          <p>
            Please log in using your personal information to stay connected with
            us.
          </p>
        </div>
        <div className="form-content">
          <h2>LOGIN</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label>Email</label>
            </div>
            <div className="input-field">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Password</label>
            </div>
            <a href="#" className="forgot-pass-link">
              Forgot password?
            </a>
            <button type="submit">Log In</button>
          </form>
          {error && <div className="error-message">{error}</div>}{" "}
          {/* Display error message */}
          <div className="bottom-link">
            Don't have an account?
            <a href="#" onClick={() => setIsSignup(true)}>
              Signup
            </a>
          </div>
        </div>
      </div>
      <div className="form-box signup">
        <div className="form-details">
          <h2>Create Account</h2>
          <p>
            To become a part of our community, please sign up using your
            personal information.
          </p>
        </div>
        <div className="form-content">
          <h2>SIGNUP</h2>
          <form action="#">
            <div className="input-field">
              <input type="text" required />
              <label>Enter your email</label>
            </div>
            <div className="input-field">
              <input type="password" required />
              <label>Create password</label>
            </div>
            <div className="policy-text">
              <input type="checkbox" id="policy" />
              <label htmlFor="policy">
                I agree to the
                <a href="#" className="option">
                  Terms & Conditions
                </a>
              </label>
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <div className="bottom-link">
            Already have an account?
            <a href="#" onClick={() => setIsSignup(false)}>
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPopup;
