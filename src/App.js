import React, {useState} from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import FloatingButton from "./components/UI/FloatingButton";

import Login from "./components/Login/Login";
import Todo from "./components/Todo/Todo";
import {Navigate, Route, Routes} from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";

function App() {

    const [isLoggedIn, setisLoggedIn] = useState(
        localStorage.getItem("isLoggedIn") === "true"
    );
    const handlogin = (inputRef, inputRef2) => {
        if (inputRef.current.value === "admin" && inputRef2.current.value === "admin") {
            localStorage.setItem("isLoggedIn", true);
            setisLoggedIn(true)
        }

    };
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        setisLoggedIn(false);
    };

    return (
        <div className="container">
            {isLoggedIn ?
                        <Routes>
                            <Route path="*" element={<Navigate replace to="/listTodo" />} />

                            <Route path="/listTodo" element={<Todo/>}/>

                            <Route path="/about" element={<About/>}/>

                            <Route path="/Detail/:id/:todo" element={<Detail/>} />



                        </Routes>
                        : <Login login={handlogin}/>
            }

            <FloatingButton logout={handleLogout}/>
        </div>


    );
}

export default App;
