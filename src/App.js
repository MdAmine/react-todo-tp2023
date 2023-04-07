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
  const [state, setState] = useState(true);

  const changeState = (value) => {
    setState(value);
  };

  const generateId = () => Math.floor(Math.random() * 1000);
  const todoItems = [
    {
      id: 1,
      todo: "Read books",
      complete: false,
    },
    {
      id: 2,
      todo: "Journaling",
      complete: false,
    },
    {
      id: 3,
      todo: "Make Dinner",
      complete: false,
    },
    {
      id: 4,
      todo: "Push-ups",
      complete: false,
    },
  ];

  return (
    <div className="container">
      {state && (
        <>
       
          <ExampleContext.Provider
              value={{
                myVar: todoItems,
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
