import React, { useState } from "react";
import "./Signup.css";
import { post } from "../../services/api";

const Signup = () => {
  const [activeTab, setActiveTab] = useState("user");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setErrorMessage("");
  };

  const handleSignup = async () => {
    setErrorMessage(""); // Clear any previous error messages

    // Validate form inputs
    if (!name) {
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!email) {
      setErrorMessage("Please enter your email.");
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setErrorMessage("Please enter a password.");
      return;
    }

    if (!isValidPassword(password)) {
      setErrorMessage(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit."
      );
      return;
    }

    try {
      // Send signup request to the server
      let endpoint;
      if (activeTab === "user") {
        endpoint = "/users/signup";
      } else if (activeTab === "instructor") {
        endpoint = "/instructors/signup";
      }

      const response = await post(endpoint, { name, email, password });
      // Handle the response from the server (you can redirect to the login page or show a success message)
      console.log("Signup response:", response);

      // Clear the form fields after successful signup
      setName("");
      setEmail("");
      setPassword("");
      setErrorMessage("");
    } catch (error) {
      console.error("Error:", error);
      // Handle errors from the server (you can show an error message to the user)
      setErrorMessage("An error occurred during signup. Please try again later.");
    }
  };

  const isValidEmail = (email) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    // Password complexity requirements: At least 8 characters, one uppercase, one lowercase, and one digit
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="">
      <div className="hero min-h-screen bg-cyan-700">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="tabs">
                <div
                  className={`tab tab-lg ${activeTab === "user" ? "tab-active" : ""}`}
                  onClick={() => handleTabChange("user")}
                >
                  User
                </div>
                <div
                  className={`tab tab-lg ${activeTab === "instructor" ? "tab-active" : ""}`}
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
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
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
                  <div className="form-control mt-6">
                    <button className="btn btn-primary" onClick={handleSignup}>
                      Signup
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "instructor" && (
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
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
                  <div className="form-control mt-6">
                    <button className="btn btn-primary" onClick={handleSignup}>
                      Signup as Instructor
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

export default Signup;
