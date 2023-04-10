import React, { createContext, useCallback, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //const [redirectToReferrer, setRedirectToReferrer] = useState(false);

    const handleLogin = useCallback(() => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        //setRedirectToReferrer(true);
        console.log("Logged in successfully!");
        navigate("/todolist");
      }, []);

    const handleLogout = useCallback(() => {
        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn", "false");
        console.log("Logged out successfully!", isLoggedIn);
        //setRedirectToReferrer(false);
      }, []);

    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const loggedIn = localStorage.getItem("isLoggedIn") === "true"?? false;
        console.log("isLoggedIn ", loggedIn)
        return loggedIn;
    });

    useEffect(() => {
        console.log("isLoggedIn ", isLoggedIn)
        localStorage.setItem("isLoggedIn", isLoggedIn);
    }, [isLoggedIn]);

    /*if (redirectToReferrer) {
        navigate("/todolist");
    }*/

    return (
        <>
            <LoginContext.Provider value={{
                    username, setUsername,
                    password, setPassword, 
                    handleSubmit: handleLogin, 
                    isLoggedIn, handleLogout
                }}>
                {children}
            </LoginContext.Provider>
        </>
    )
}
export { LoginContext, LoginProvider };