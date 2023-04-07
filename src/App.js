import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Login from "./components/UI/Login/login";
import Home from "./components/UI/Home/home";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import TodoList from "./components/UI/Todo/todo";
import FloatingButton from "./components/UI/FloatingButton";
import About from "./components/UI/About/about";
import { TodoContext } from "./components/UI/context/TodoContext";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

 
    return (
      //<TodoContext.Provider value={{ todoItems, setTodoItems }} >
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path="/" setIsLoggedIn={setIsLoggedIn} element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/todolist" element={<TodoList />} />
            </Routes>
          </BrowserRouter>
        </div>
      //</TodoContext.Provider>
    );
  
}

export default App;
