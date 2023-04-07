import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Todo from "./components/Todo/Todo";
import Login from "./components/Login/Login";

import { Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import TodoDetailsItem from "./components/Todo/TodoDetailsItem";
import TodoContext from "./context/todoContext";

import { useState } from "react";
function App() {
  const generateId = () => Math.floor(Math.random() * 1000);
  const [todoItems, setTodoItems] = useState([
    {
      id: generateId(),
      todo: "Read books",
      complete: false,
    },
    {
      id: generateId(),
      todo: "Journaling",
      complete: false,
    },
    {
      id: generateId(),
      todo: "Make Dinner",
      complete: false,
    },
    {
      id: generateId(),
      todo: "Push-ups",
      complete: false,
    },
  ]);
  return (
    <div className="container">
      <TodoContext.Provider value={{ todoItems, setTodoItems }}>
        <Routes>
          <Route path="/todo" element={<Navigate replace to="/" />} />
          <Route path="/about" element={<About />} />;
          <Route path="/login" element={<Login />} />;
          <Route path="/" element={<Todo />} />;
          <Route path="*" element={<NotFound />} />
          <Route path="/details/:id" element={<TodoDetailsItem />} />
        </Routes>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
