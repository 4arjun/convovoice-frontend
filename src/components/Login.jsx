import "./Login.css";
import React, { useEffect, useState } from "react";
import bgimg from "../assets/bg-img.jpg";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

const Login2 = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoader] = useState(true);

  const [showEmailPlaceholder, setShowEmailPlaceholder] = useState(false);
  const [showPasswordPlaceholder, setShowPasswordPlaceholder] = useState(false);

  const handleEmailFocus = () => setShowEmailPlaceholder(true);
  const handleEmailBlur = () => setShowEmailPlaceholder(false);

  const handlePasswordFocus = () => setShowPasswordPlaceholder(true);
  const handlePasswordBlur = () => setShowPasswordPlaceholder(false);

  useEffect(() => {
    setTimeout(() => setIsLoader(false), 3500);
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const { access, refresh } = data;

        localStorage.setItem("accessToken", access);
        localStorage.setItem("refreshToken", refresh);

        navigate("/process");
        console.log("Login successful!");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);

      console.error("Error during login:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
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
          Incorrect username or password. Please try again.
        </Alert>
      )}

      {isLoading ? (
        <div id="preloader"></div>
      ) : (
        <div className="bg-img-container">
          <img src={bgimg} alt="" />
          <div className="login-form">
            <div className="login-items">
              <h2 className="login-text">Login</h2>
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path
                        stroke-dasharray="64"
                        stroke-dashoffset="64"
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
                        stroke-dasharray="24"
                        stroke-dashoffset="24"
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
                        ? "hideemailplaceholder"
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
                    id="email"
                    name="email"
                    required
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
                        ? "hidepasswordplaceholder"
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
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: "15px",
                  justifyContent: "space-between",
                  width: "80%",
                }}
              >
                <input
                  style={{ marginTop: "3px" }}
                  type="checkbox"
                  id="myCheckbox"
                  name="myCheckbox"
                  value="value1"
                />
                <p style={{ marginLeft: "-55px", fontSize: "16px" }}>
                  Remember me
                </p>
                <a className="forgot-password-text" href="#">
                  Forgot Password
                </a>
              </div>

              <button
                onClick={handleLogin}
                style={{ marginTop: "15px" }}
                className="login-btn"
              >
                Login
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
                  Dont have an account?
                </p>
                <a className="register-text" href="#">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login2;
