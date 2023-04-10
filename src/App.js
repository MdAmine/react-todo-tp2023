import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom"
import { TodoProvider } from "./components/UI/Context/TodoProvider";
import { LoginProvider } from "./components/UI/Context/LoginProvider";
import AppRoutes from "./components/UI/Routes/AppRoutes";

function App() {


  return (
    <div className="container">
       <BrowserRouter>
      <TodoProvider>
        <LoginProvider>
          <AppRoutes />
        </LoginProvider>
      </TodoProvider>
    </BrowserRouter>
    </div>
  );
}
export default App;
