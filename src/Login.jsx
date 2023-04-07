import React, { useState } from "react";

const Login = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidEmail && isValidPassword) {
      alert("Good");
      setLoggedIn(true);
      window.location.href = '/todo'; 
    } else {
      alert("No");
    }
  };
  
  return (
    <form className="text-center my-4 text-light" onSubmit={handleSubmit}>
      <h1 className="mb-4">Login Form</h1>
      <input
        type="text"
        className={`form-control mb-2`}
        id="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      {!isValidEmail && email !== "" && (
        <div className="alert alert-danger">Invalid email format</div>
      )}
      <input
        type="password"
        className={`form-control mb-3`}
        id="password"
        placeholder="Enter your Password"
        value={password}
        onChange={handlePasswordChange}
      />
      {!isValidPassword && password !== "" && (
        <div className="alert alert-danger">
          Password should be at least 6 characters long
        </div>
      )}
      <button type="submit" className="btn btn-dark">
        Login
      </button>
    </form>
  );
};

export default Login;
