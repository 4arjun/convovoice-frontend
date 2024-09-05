import "./Login2.css";
import React, { useState } from "react";
import bgimg from "../assets/bg-img.jpg";

const Login2 = () => {
  const [showEmailPlaceholder, setShowEmailPlaceholder] = useState(false);
  const [showPasswordPlaceholder, setShowPasswordPlaceholder] = useState(false);

  const handleEmailFocus = () => setShowEmailPlaceholder(true);
  const handleEmailBlur = () => setShowEmailPlaceholder(false);

  const handlePasswordFocus = () => setShowPasswordPlaceholder(true);
  const handlePasswordBlur = () => setShowPasswordPlaceholder(false);

  return (
    <div className="login-container">
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

                    outline: "None",
                  }}
                  placeholder="EMAIL"
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
                  }}
                  placeholder="PASSWORD"
                  type="password"
                  id="password"
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
              <a
                href="#"
                style={{
                  fontSize: "16px",
                  margin: "auto 0",
                  textDecoration: "None",
                  color: "white",
                }}
              >
                Forgot Password
              </a>
            </div>

            <button style={{ marginTop: "15px" }} className="login-btn">
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
              <a
                style={{
                  textDecoration: "None",
                  color: "white",
                  margin: "auto 0",
                  fontWeight: "600",
                  paddingLeft: "5px",
                }}
                href="#"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login2;
