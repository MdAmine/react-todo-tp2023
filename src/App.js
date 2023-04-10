import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Login from "./components/UI/Login/login";
import Home from "./components/UI/Home/home";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import TodoList from "./components/UI/Todo/todo";
import About from "./components/UI/About/about";
import { TodoProvider } from "./components/UI/context/TodoProvider";
import { LoginProvider } from "./components/UI/context/LoginProvider";
import { LoginContext } from "./components/UI/context/LoginProvider";

function App() {

  //const { isLoggedIn } = useContext(LoginContext);

  return (
    <div className="container">
      <BrowserRouter>
        <TodoProvider>
          <LoginProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/todolist" element={<TodoList />} />
                <Navigate to="/login" />
              <Route exact path="/login" element={<Login />} />
            </Routes>
          </LoginProvider>
        </TodoProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
