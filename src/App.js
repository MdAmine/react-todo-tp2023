import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import FloatingButton from "./components/UI/FloatingButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import Login from "./components/Login/Login";
import Todo from "./components/Todo/Todo";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import MyContext from "./contex";

function App() {
  
  const generateId = () => Math.floor(Math.random() * 1000);
  const [todoItems,setTodoItems]=useState([
    {
      id: generateId(),
      todo: "Read books",
      complete: false,
      priority:1,
      createdAT:"28/03/2023",
      updatedAT:""
    },
    {
      id: generateId(),
      todo: "Journaling",
      complete: false,
      priority:2,
      createdAT:"20/01/2023",
      updatedAT:""
    },
    {
      id: generateId(),
      todo: "Make Dinner",
      complete: false,
      priority:3,
      createdAT:"01/04/2023",
      updatedAT:""
    },
    {
      id: generateId(),
      todo: "Push-ups",
      complete: false,
      priority:4,
      createdAT:"25/02/2023",
      updatedAT:""
    },
  ]);

  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const login = (email, password) => {
    if (email === "admin" && password === "admin") {
      localStorage.setItem("isLoggedIn", true);
      setIsLogin(true);
    }
  };
  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLogin(false);
    navigate("/");
  };
  const navigate = useNavigate();
  return (
    <div className="container">
      <MyContext.Provider value={{todoItems,setTodoItems}}>
        {isLogin ? (
          <Routes>
            <Route path="*" element={<Navigate replace to={"/Todo"} />} />
            <Route path="/Todo" element={<Todo />} />
            <Route path="/About" element={<About />} />
            <Route path="/Detail/:id" element={<Detail />} />
          </Routes>
        ) : (
          <Login login={login} />
        )}
        <FloatingButton logout={logout} />
      </MyContext.Provider>
      ;
    </div>
  );
}

export default App;
