import React, { useState } from "react";

const Login = ({ loginn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/;

  if (localStorage.getItem("email")) {
    loginn();
  }
  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setIsValidEmail(emailRegex.test(emailValue));
  };

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    setIsValidPassword(passwordValue.length >= 6);
  };

  const login = (event) => {
    event.preventDefault();

    if (isValidEmail && isValidPassword) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      loginn();

      alert("Bien Connecter  " + email + " " + password);
    } else {
      alert("Erreur des donnees");
    }
  };

  return (
    <form className="text-center my-4 text-light">
      <h1 className="mb-4">Login Form</h1>
      <input
        type="text"
        className={`form-control mb-3 ${
          !isValidEmail && email !== "" ? "is-invalid" : "is-valid"
        }`}
        id="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        className={`form-control mb-3 ${
          !isValidPassword && password !== "" ? "is-invalid" : "is-valid"
        }`}
        id="password"
        placeholder="Enter your Password"
        value={password}
        onChange={handlePasswordChange}
        style={{
          color: "#fff",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          border: "none",
        }}
      />
      <button type="submit" className="btn btn-dark" onClick={login}>
        Login
      </button>
    </form>
  );
};

export default Login;
