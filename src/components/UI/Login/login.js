import { useEffect, useState } from "react";
import FloatingButton from "../FloatingButton"
import Home from "../Home/home";
import { Navigate  } from 'react-router';
import { useNavigate } from 'react-router-dom';

function Login(props) {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    // Check if the username and password are correct
    if (username === "erguibi" && password === '12345') {
      //onLogin();
      handleLogin();
      setRedirectToReferrer(true);
      console.log("Logged in successfully!");
    } else {
      console.log("Invalid username or password");
    }
  }

  

  //login
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  if (redirectToReferrer) {
    return <Navigate  to="/todolist" handleLogout={handleLogout}/>;
  }

  function handleLogin() {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    console.log("Logged in successfully!")
  }

  function handleLogout() {
    console.log("wwwwwww")
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
    return <Navigate  to="/login" />
  }

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