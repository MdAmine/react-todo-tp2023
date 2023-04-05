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
import Todo from "./Todo";
import Login from "./Login";
function App() {
  return (
    <div className="container">
<Todo />

     <Login />

      <FloatingButton />
    </div>
  );
}

export default App;
