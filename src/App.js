import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import FloatingButton from "./components/UI/FloatingButton";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ContextTodo from "./components/contexte/ContextTodo";
import About from "./components/About/About";
import Todo from "./components/Todo/Todo";
import Detail from "./components/Detail/Detail";

function App() {
  const [loginIn, setlogin] = useState(false);

  const logout = () => {
    setlogin(false);
  };

  const loginn = () => {
    setlogin(true);
  };

  const generateId = () => Math.floor(Math.random() * 1000);

  const [todoItems, settodoItems] = useState([
    {
      id: generateId(),
      todo: "Read books",
      complete: false,
      priority: "low",
      createdAt: new Date(),
      editedAt: null,
    },
    {
      id: generateId(),
      todo: "Journaling",
      complete: false,
      priority: "high",
      createdAt: new Date(),
      editedAt: null,
    },
    {
      id: generateId(),
      todo: "Make Dinner",
      complete: false,
      priority: "medium",
      createdAt: new Date(),
      editedAt: null,
    },
    {
      id: generateId(),
      todo: "Push-ups",
      complete: false,
      priority: "low",
      createdAt: new Date(),
      editedAt: null,
    },
  ]);

  const addTodo = (newTodo) => {
    const newTodoItem = {
      id: generateId(),
      todo: newTodo,
      complete: false,
      priority: "low",
      createdAt: new Date(),
      editedAt: null,
    };
    settodoItems([...todoItems, newTodoItem]);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <ContextTodo.Provider value={{ todoItems, settodoItems }}>
          {loginIn ? (
            <>
              <FloatingButton logout={logout} />

              <Routes>
                <Route path="*" element={<Navigate replace to="/todo" />} />
                <Route path="/about" element={<About />} />
                <Route path="/todo" element={<Todo addTodo={addTodo} />} />
                <Route path="/detail/:id/:n/:c/:e/:f/:j" element={<Detail />} />
              </Routes>
            </>
          ) : (
            <Login loginn={loginn} />
          )}
        </ContextTodo.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
