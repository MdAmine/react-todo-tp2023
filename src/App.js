import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import FloatingButton from "./components/UI/FloatingButton";
import Header from "./components/UI/HeaderTodo";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <div className="container">
      <Header/>
      <Todo/>
      <FloatingButton />
    </div>
  );
}

export default App;
