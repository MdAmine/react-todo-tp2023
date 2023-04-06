import React, {useState} from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import FloatingButton from "./components/UI/FloatingButton";

import Login from "./components/Login/Login";
import Todo from "./components/Todo/Todo";

function App() {

    const [isLoggedIn, setisLoggedIn] = useState(
        localStorage.getItem("isLoggedIn") === "true"
    );
    const handlogin = (inputRef,inputRef2) => {
        if(inputRef.current.value==="admin" && inputRef2.current.value==="admin"){
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
                {isLoggedIn ? <Todo/> : <Login login={handlogin}/>}
                <FloatingButton logout={handleLogout}/>
            </div>



    );
}

export default App;
