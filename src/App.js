import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import FloatingButton from "./components/UI/FloatingButton";
import Todo from "./components/Todo/Todo";
import Login from "./components/login/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ToDoList from "./components/toDoList/ToDoList";
import About from "./components/about/About";
import Detail from "./components/details/Detail";
import Context from "./components/contexte/Context";



function App() {
    const generateId = () => Math.floor(Math.random() * 1000);
    const [user, setUser] = useState(false);
    const logout = () => {
        setUser(false);
    };
    const [todoItems, setTodoItems] = useState([
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
    return (
        <Context.Provider value={{todoItems, setTodoItems}}>
            <div className="container">
                    {user ? (
                        <div>
                            <Routes>
                                <Route path="/todo" element={<Todo/>}/>
                                <Route path="/todoList" element={<ToDoList/>}/>
                                <Route path="/about" element={<About/>}/>
                                <Route path="/detail/:id/:todo/:complete" element={<Detail/>}/>
                            </Routes>
                        </div>
                    ) : (
                        <Login setUser={setUser}/>
                    )}
                    <FloatingButton logout={logout}/>
            </div>
        </Context.Provider>
    );
}
export default App;
