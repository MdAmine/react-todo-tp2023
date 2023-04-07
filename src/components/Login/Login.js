import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  let navigation = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password });
  };
  
  if (localStorage.getItem("email")) {
    setUser(true);
  }
 
  const handleLogin = ({ email, password }) => {
    if (email === "admin@gmail.com" && password === "admin") {
      localStorage.setItem("email", email);
      localStorage.setItem("pass", password);
      // localStorage.setItem('isLoggedIn', 'true');
      setUser(true);
      navigation("/todo");
    } else {
      setError("Invalid credentials");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div>
      <form className="text-center my-4 text-light" onSubmit={handleSubmit}>
        <h1 className="mb-4">Login Form</h1>
        <input
          type="text"
          className={`form-control mb-2`}
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          className={`form-control mb-3`}
          id="password"
          value={password}
          placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={{ color: "red" }}> {error}</div>
        <button type="submit" className="btn btn-dark">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
