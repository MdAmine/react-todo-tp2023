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
            priority:3,
            createAT:new Date(2023, 4, 25, 12, 30),
            updateAT:new Date()
        },
        {
            id: generateId(),
            todo: "Journaling",
            complete: false,
            priority:1,
            createAT:new Date(2023, 4, 25, 12, 33),
            updateAT:new Date()
        },
        {
            id: generateId(),
            todo: "Make Dinner",
            complete: false,
            priority:2,
            createAT:new Date(2023, 4, 25, 12, 38),
            updateAT:new Date()
        },
        {
            id: generateId(),
            todo: "Push-ups",
            complete: false,
            priority:1,
            createAT:new Date(2023, 4, 25, 12, 50),
            updateAT:new Date()
        },
    ]);
    const detailItem = (id) =>{
        return   todoItems.find(item => item.id === parseInt(id));
    }
    return (
        <Context.Provider value={{todoItems, setTodoItems,detailItem}}>
            <div className="container">
                    {user ? (
                        <div>
                            <Routes>
                                <Route path="/todo" element={<Todo/>}/>
                                <Route path="/todoList" element={<ToDoList/>}/>
                                <Route path="/about" element={<About/>}/>
                                <Route path="/detail/:id" element={<Detail/>}/>
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
