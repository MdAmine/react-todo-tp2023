import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import FloatingButton from "./components/UI/FloatingButton";

import Login from "./components/Login/Login";
import Todo from "./components/Todo/Todo";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import TodosContext from "./components/context/context";

function App() {
  const generateId = () => Math.floor(Math.random() * 1000);

  const [todoItems, setTodoItems] = useState([
    {
      id: generateId(),
      todo: "Read books",
      complete: false,
      priority:1,
      createdAt:new Date('04/04/2023 23:15'),
      updatedAt:new Date('04/04/2023 23:15'),

    },
    {
      id: generateId(),
      todo: "Journaling",
      complete: false,
      priority:3,
      createdAt: new Date('04/04/2023 23:15'),
      updatedAt:new Date('04/04/2023 23:15'),
    },
    {
      id: generateId(),
      todo: "Make Dinner",
      complete: false,
      priority:2,
      createdAt: new Date('04/04/2023 23:15'),
      updatedAt:new Date('04/04/2023 23:15'),
    },
    {
      id: generateId(),
      todo: "Push-ups",
      complete: false,
      priority:4,
      createdAt: new Date('04/04/2023 23:15'),
      updatedAt:new Date('04/04/2023 23:15'),
    },
  ]);

  const [isLoggedIn, setisLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const handlogin = (inputRef, inputRef2) => {
    if (
      inputRef.current.value === "admin" &&
      inputRef2.current.value === "admin"
    ) {
      localStorage.setItem("isLoggedIn", true);
      setisLoggedIn(true);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setisLoggedIn(false);
  };

  return (
    <>
      <TodosContext.Provider value={{ todoItems, setTodoItems }}>
        <div className="container">
          {isLoggedIn ? (
            <Routes>
              <Route path="*" element={<Navigate replace to="/listTodo" />} />

              <Route
                path="/listTodo"
                element={<Todo generateId={generateId} />}
              />

              <Route path="/about" element={<About />} />

              <Route path="/Detail/:id" element={<Detail />} />
            </Routes>
          ) : (
            <Login login={handlogin} />
          )}

          <FloatingButton logout={handleLogout} />
        </div>
      </TodosContext.Provider>
    </>
  );
}

export default App;
