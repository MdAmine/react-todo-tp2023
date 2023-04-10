import { useEffect, useState, useContext } from "react";
import FloatingButton from "../FloatingButton"
import Home from "../Home/home";
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginProvider'

function Login() {

  const {
    username, setUsername,
    setPassword, password,
    handleSubmit } = useContext(LoginContext)



  return (
    <>
      <form className="text-center my-4 text-light" onSubmit={handleSubmit}>
        <h1 className="mb-4">Login Form</h1>
        <input
          type="text"
          className={`form-control mb-2`}
          id="email"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          className={`form-control mb-3`}
          id="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-dark" red="true">
          Login
        </button>
      </form>
    </>
  )
}
export default Login