import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import FloatingButton from "./components/UI/FloatingButton";
import Todo from "./components/Todo/Todo";
import Login from "./components/Login/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import TodoDetail from "./components/Details/TodoDetail";
import TodoContext from "./components/Context/TodoContext";
function App() {
  let navigation = useNavigate();
  const [user, setUser] = useState(false);

  const generateId = () => Math.floor(Math.random() * 1000);
  let [todoItems, setTodoItems] = useState([
    {
      id: generateId(),
      todo: "Read books",
      complete: false,
    },
    {
      id: generateId(),
      todo: "Journaling",
      complete: false,
    },
    {
      id: generateId(),
      todo: "Make Dinner",
      complete: false,
    },
    {
      id: generateId(),
      todo: "Push-ups",
      complete: false,
    },
  ]);

  const logout = () => {
    setUser(false);
    navigation("/");
  };

  return (
    <TodoContext.Provider
      value={{
        todo: todoItems,
        setTodo: setTodoItems,
      }}
    >
      <div className="container">
        {user ? (
          <div>
            <Routes>
              <Route path="/*" element={<App />} />

              <Route path="todo" element={<Todo />} />
              <Route path="about" element={<About />} />
              <Route path="todo/:id" element={<TodoDetail />} />
              {/* <Route path="login" element={<App />} /> */}

            </Routes>
          </div>
        ) : (
          <Login setUser={setUser} />
        )}

        <FloatingButton logout={logout} />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
