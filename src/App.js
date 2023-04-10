import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import FloatingButton from "./components/UI/FloatingButton";
import Login from "./components/Login/Login";
import Todo from "./components/Todo/Todo";
import './components/Todo/todo.css';

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

   return isLoggedIn ? (
    <div className="container">
      <Todo />
      <FloatingButton></FloatingButton>
    </div>
  ) : (
    <div className="container">
      <Login />
    </div>
  );
}

export default App;
