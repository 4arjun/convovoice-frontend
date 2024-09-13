import "./Register.css";
import React, { useEffect, useState } from "react";
import bgimg from "../assets/bg-img.jpg";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

const Register = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoader] = useState(true);
  const [message, setMessage] = useState("");

  const [showEmailPlaceholder, setShowEmailPlaceholder] = useState(false);
  const [showPasswordPlaceholder, setShowPasswordPlaceholder] = useState(false);
  const [showConfirmPasswordPlaceholder, setShowConfirmPasswordPlaceholder] =
    useState(false);

  const handleEmailFocus = () => setShowEmailPlaceholder(true);
  const handleEmailBlur = () => setShowEmailPlaceholder(false);

  const handlePasswordFocus = () => setShowPasswordPlaceholder(true);
  const handlePasswordBlur = () => setShowPasswordPlaceholder(false);

  const handleConfirmPasswordFocus = () =>
    setShowConfirmPasswordPlaceholder(true);
  const handleConfirmPasswordBlur = () =>
    setShowConfirmPasswordPlaceholder(false);

  useEffect(() => {
    setTimeout(() => setIsLoader(false), 500);
  }, []);

  const handleSignup = async (event) => {
    event.preventDefault();
    setShowAlert(false);
    setMessage("");
    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (emailRegex.test(username) || usernameRegex.test(username)) {
      if (passwordRegex.test(password) && password === confirmPassword) {
        console.log("format correct");
      } else {
        console.log("Invalid password format or passwords do not match");
        setMessage("Invalid password format or passwords do not match");
        setShowAlert(true);
        return;
      }
    } else {
      setMessage("Invalid email/username format");
      console.log("Invalid email/username format");
      setShowAlert(true);
      return;
    }
    if (!showAlert) {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/register/", {
          // Changed endpoint to /signup
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
          navigate("/welcome");
          console.log("Signup successful!");
        } else {
          setError("Signup failed. Please check your details.");
        }
      } catch (error) {
        console.error("Error during signup:", error);
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="signup-container">
      {showAlert && (
        <Alert
          className="alert-container"
          style={{
            zIndex: "1",
            position: "absolute",
            top: "10%",
            backgroundColor: "#1d0f57",
            color: "#fff",
            left: "50%",
            transform: "translateX(-50%)",
            maxWidth: "400px",
          }}
          severity="error"
          onClose={() => setShowAlert(false)}
        >
          {message}
        </Alert>
      )}

      {isLoading ? (
        <div id="preloader"></div>
      ) : (
        <div className="bg-img-container">
          <img src={bgimg} alt="" />
          <div className="signup-form">
            <div className="signup-items">
              <h2 className="signup-text">Sign Up</h2>
              <div
                style={{
                  textAlign: "left",
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <svg
                    style={{ position: "absolute" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    >
                      <path
                        strokeDasharray="64"
                        strokeDashoffset="64"
                        d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.6s"
                          values="64;0"
                        />
                      </path>
                      <path
                        strokeDasharray="24"
                        strokeDashoffset="24"
                        d="M3 6.5l9 5.5l9 -5.5"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.6s"
                          dur="0.2s"
                          values="24;0"
                        />
                      </path>
                    </g>
                  </svg>

                  <input
                    onFocus={handleEmailFocus}
                    onBlur={handleEmailBlur}
                    className={
                      showEmailPlaceholder
                        ? "hide-email-placeholder"
                        : "email-placeholder"
                    }
                    style={{
                      backgroundColor: "transparent",
                      border: "None",
                      borderBottom: "1px solid #ffffff",
                      width: "100%",
                      color: "white",
                      outline: "None",
                      paddingLeft: "20px",
                    }}
                    placeholder="USERNAME/EMAIL"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="email"
                    id="username"
                    name="username"
                    required
                    autoComplete="username email"
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: "6px",
                  }}
                >
                  <svg
                    style={{ position: "absolute" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3"
                    />
                  </svg>
                  <input
                    onFocus={handlePasswordFocus}
                    onBlur={handlePasswordBlur}
                    className={
                      showPasswordPlaceholder
                        ? "hide-password-placeholder"
                        : "password-placeholder"
                    }
                    style={{
                      backgroundColor: "transparent",
                      border: "None",
                      borderBottom: "1px solid #ffffff",
                      width: "100%",
                      outline: "None",
                      color: "white",
                      paddingLeft: "20px",
                    }}
                    placeholder="PASSWORD"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    required
                    autoComplete="new-password"
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: "6px",
                  }}
                >
                  <svg
                    style={{ position: "absolute" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3"
                    />
                  </svg>
                  <input
                    onFocus={handleConfirmPasswordFocus}
                    onBlur={handleConfirmPasswordBlur}
                    className={
                      showConfirmPasswordPlaceholder
                        ? "hide-confirm-password-placeholder"
                        : "confirm-password-placeholder"
                    }
                    style={{
                      backgroundColor: "transparent",
                      border: "None",
                      borderBottom: "1px solid #ffffff",
                      width: "100%",
                      outline: "None",
                      color: "white",
                      paddingLeft: "20px",
                    }}
                    placeholder="CONFIRM PASSWORD"
                    type="password"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    name="confirm-password"
                    required
                    autoComplete="new-password"
                  />
                </div>
              </div>

              <button
                onClick={handleSignup}
                style={{ marginTop: "15px" }}
                className="signup-btn"
              >
                Sign Up
              </button>

              <div
                style={{
                  paddingTop: "5px",
                  display: "flex",
                  flexDirection: "row",
                  width: "80%",
                  justifyContent: "center",
                }}
              >
                <p style={{ fontWeight: "200", fontSize: "15px" }}>
                  Already have an account?
                </p>
                <a className="login-text" href="/">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
