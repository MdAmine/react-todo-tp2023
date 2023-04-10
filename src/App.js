import React, { useState, createContext } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import FloatingButton from "./components/UI/FloatingButton";
import Todo from "./components/Todo/Todo";
import Login from "./components/Login/Login";
import About from "./components/About/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContexte from "./components/ContextKhadija";

function App() {
  /* const isLoggedIn = localStorage.getItem("isLoggedIn");

  return isLoggedIn ? (
    <div className="container">
      <Todo />
      <FloatingButton></FloatingButton>
    </div>
  ) : (
    <div className="container">
      <Login />
    </div>
  ); */

  const [loggedIn, setLoggedIn] = useState(false);
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      todo: "Read books",
      complete: false,
      priority: 1,
      createdAt: "2023-04-09T10:24:15.783Z",
      updatedAt: "",
    },
    {
      id: 2,
      todo: "Journaling",
      complete: false,
      priority: 1,
      createdAt: "2023-04-08T10:24:15.783Z",
      updatedAt: "",
    },
    {
      id: 3,
      todo: "Make Dinner",
      complete: false,
      priority: 2,
      createdAt: "2023-03-09T10:24:15.783Z",
      updatedAt: "",
    },
    {
      id: 4,
      todo: "Push-ups",
      complete: false,
      priority: 3,
      createdAt: "2023-03-22T10:24:15.783Z",
      updatedAt: "",
    },
  ]);

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <MyContexte.Provider
          value={{ loggedIn, setLoggedIn, todoItems, setTodoItems }}
        >
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/todo"
              element={<Todo handleLogout={handleLogout} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
          {loggedIn && <FloatingButton handleLogout={handleLogout} />}
        </MyContexte.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
