import React, { useState, createContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Todo from "./Todo";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import FloatingButton from "./components/UI/FloatingButton";
import Details from "./Details";
import TodoDetails from "./TodoDetails";
import ContexteSaad from "./ContexteSaad";



function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [todoItems, setTodoItems] = useState([
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
  ]);

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <ContexteSaad.Provider value={{ loggedIn, setLoggedIn, todoItems, setTodoItems }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/todo" element={<Todo handleLogout={handleLogout} />} />
            <Route path="/about" element={<About />} />
          </Routes>
          {loggedIn && <FloatingButton handleLogout={handleLogout} />}
        </ContexteSaad.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
