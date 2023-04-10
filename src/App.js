import React, { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import FloatingButton from "./components/UI/FloatingButton";
import Todo from "./components/Todo/Todo";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import TodoDetails from "./components/Todo/TodoDetails";
import TodoItemContext from "./contexts/TodoItemContext";

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("login"));

  const login = (username, password) => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("login", true);
      setLoggedIn(true);
    }
  };

  const logout = () => {
    localStorage.clear();
    setLoggedIn(false);
    navigation("/");
  };

  const navigation = useNavigate();

  const generateId = () => Math.floor(Math.random() * 1000);

  const [todoItems, setTodoItems] = useState([
    {
      id: generateId(),
      todo: "Read books",
      complete: false,
      priority: 1,
      createdAt: new Date().toLocaleString(),
      updatedAt: ""
    },
    {
      id: generateId(),
      todo: "Journaling",
      complete: false,
      priority: 2,
      createdAt: new Date().toLocaleString(),
      updatedAt: ""
    },
    {
      id: generateId(),
      todo: "Make Dinner",
      complete: false,
      priority: 3,
      createdAt: new Date().toLocaleString(),
      updatedAt: ""
    },
    {
      id: generateId(),
      todo: "Push-ups",
      complete: false,
      priority: 4,
      createdAt: new Date().toLocaleString(),
      updatedAt: ""
    },
  ]);

  return (
    <TodoItemContext.Provider value={{ todoItems, setTodoItems }}>
      <div className="container">
        {loggedIn ? (
          <>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/details/:id" element={<TodoDetails />} />
              <Route path="/" element={<Todo />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
            <FloatingButton logout={logout} />
          </>
        ) : (
          <Login login={login} />
        )}
      </div>
    </TodoItemContext.Provider>
  );
}

export default App;
