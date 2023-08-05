import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { post } from "../../services/api";
import { useAuth } from "../../hooks/useAuth"; // Import useAuth hook

const Login = () => {
  const [activeTab, setActiveTab] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // Destructure the login function from useAuth

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setErrorMessage("");
  };

  const handleLogin = async () => {
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Please enter your email and password.");
      return;
    }

    try {
      let endpoint;
      if (activeTab === "user") {
        endpoint = "/users/login";
      } else if (activeTab === "instructor") {
        endpoint = "/instructors/login";
      }

      const response = await post(endpoint, { email, password });
      console.log("Login response:", response);

      setEmail("");
      setPassword("");
      setErrorMessage("");

      if (response.token) {
        // Login was successful, store login status in localStorage
        localStorage.setItem("isLoggedIn", true);

        // Navigate to the appropriate page
        if (activeTab === "user") {
          navigate("/user");
          login("user"); // Pass the role
        } else if (activeTab === "instructor") {
          navigate("/instructor");
          login("instructor"); // Pass the role
        }
      } else {
        // Login failed, show error message
        setErrorMessage("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="">
      <div className="hero min-h-screen bg-cyan-700">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="tabs">
                <div
                  className={`tab tab-lg ${
                    activeTab === "user" ? "tab-active" : ""
                  }`}
                  onClick={() => handleTabChange("user")}
                >
                  User
                </div>
                <div
                  className={`tab tab-lg ${
                    activeTab === "instructor" ? "tab-active" : ""
                  }`}
                  onClick={() => handleTabChange("instructor")}
                >
                  Instructor
                </div>
              </div>

              {errorMessage && (
                <div className="text-error mb-4">{errorMessage}</div>
              )}

              {activeTab === "user" && (
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary" onClick={handleLogin}>
                      Login
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "instructor" && (
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary" onClick={handleLogin}>
                      Login as Instructor
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
