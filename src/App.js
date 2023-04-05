import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import FloatingButton from "./components/UI/FloatingButton";
import Todo from "./components/Todo/Todo";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="container">
      <Todo />
      {/* <Login /> */}
      <FloatingButton />
    </div>
  );
}

export default App;
