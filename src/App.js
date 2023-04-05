import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import FloatingButton from "./components/UI/FloatingButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import Login from "./components/Login/Login";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <div className="container">
      
      {/*  */}
      {/* <Login/> */}
      <Todo/>
      <FloatingButton />
    </div>
  );
}

export default App;
