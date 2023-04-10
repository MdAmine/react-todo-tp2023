import React, { useState, useRef } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import FloatingButton from "./components/UI/FloatingButton";
import Todo from "./components/Todo/Todo";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import Deatil from "./components/Detail/Detail";
import ExampleContext from "./components/context/context";


function App() {
  const [state, setState] = useState(false);

  const changeState = (value) => {
    setState(value);
  };

  const generateId = () => Math.floor(Math.random() * 1000);
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      todo: "Read books",
      complete: false,
      priority:1,
      createdAt: "4/10/2023, 10:03:42 AM",
      updatedAt: ""
    },
    {
      id: 2,
      todo: "Journaling",
      complete: false,
      priority:2,
      createdAt: "4/10/2023, 10:03:42 AM",
      updatedAt: ""
    },
    {
      id: 3,
      todo: "Make Dinner",
      complete: false,
      priority:3,
      createdAt: "4/10/2023, 10:03:42 AM",
      updatedAt: ""
    },
    {
      id: 4,
      todo: "Push-ups",
      complete: false,
      priority:4,
      createdAt: "4/10/2023, 10:03:42 AM",
      updatedAt: ""
    },
  ]);

  return (
    <div className="container">
      {state && (
        <>
       
          <ExampleContext.Provider
              value={{
                todoItems, setTodoItems
              }}
          >
              <Routes>
                <Route path="*" element={<Navigate replace to="/todo" />} />
                <Route path="/about" element={<About />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/detail/:id" element={<Deatil />} />
              </Routes>
              <FloatingButton changeState={changeState} />
          </ExampleContext.Provider>
        </>
      )}

      {!state && <Login changeState={changeState} />}
    </div>
  );
}

export default App;
