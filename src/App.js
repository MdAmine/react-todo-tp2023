import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import FloatingButton from "./components/UI/FloatingButton";
import Login from "./components/Login/Login";
import Todo from "./components/Todo/Todo";
import { useEffect, useState } from "react";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import DetailContext from "./components/context";

function App() {
  const generateId = () => Math.floor(Math.random() * 1000);
  const myTodoItems = [
    {
      id: generateId(),
      todo: "Read books",
      complete: false,
      priority: 4,
      createdAt: new Date(2023, 2, 9, 12, 45),
      updatedAt: new Date(2023, 2, 12, 10, 50),
    },
    {
      id: generateId(),
      todo: "Journaling",
      complete: false,
      priority: 1,
      createdAt: new Date(2023, 3, 19, 2, 35),
      updatedAt: new Date(2023, 3, 22, 10, 0),
    },
    {
      id: generateId(),
      todo: "Make Dinner",
      complete: false,
      priority: 2,
      createdAt: new Date(2023, 1, 3, 5, 15),
      updatedAt: new Date(2023, 1, 7, 4, 0),
    },
    {
      id: generateId(),
      todo: "Push-ups",
      complete: false,
      priority: 3,
      createdAt: new Date(2023, 0, 4, 4, 22),
      updatedAt: new Date(2023, 0, 5, 5, 0),
    },
  ];
  const [todoItems, setTodoItems] = useState(myTodoItems);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("emailData")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const handleSubmit = (event, email, password) => {
    event.preventDefault();
    console.log("hi " + email + " - " + password);
    if (email === "j@g.c" && password === "123") {
      localStorage.setItem("emailData", "j@g.c");
      localStorage.setItem("passwordData", "123");
      setIsLoggedIn(true);
      navigate("/todo");
    }
  };

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    // window.location.reload();
  };
  return (
    <div className="container">
      {!isLoggedIn ? (
        <>
          <Login handleSubmit={handleSubmit} />
        </>
      ) : (
        <>
          <FloatingButton logout={logout} />
          <DetailContext.Provider
            value={{
              todoList: todoItems,
              setTodoItems: setTodoItems,
            }}
          >
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="*" element={<Navigate to="/todo" />} />
            </Routes>
          </DetailContext.Provider>
        </>
      )}
    </div>
  );
}

export default App;
