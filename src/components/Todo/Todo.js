import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPenToSquare, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import todoItem from "./TodoItem";
import TodoItem from "./TodoItem";

function Todo(){
    const generateId = () => Math.floor(Math.random() * 1000);
    let [todoItems,setTodoItems] = useState([
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
    const completeTodoItem=(id)=>{
        const newTodoItem=todoItems.map(
            (item)=> item.id=== id ? {...item,complete: !item.complete} :item
        );
        setTodoItems(newTodoItem)
    }

    const deleteItem=(id)=>{
        const updatedItems = todoItems.filter(item => item.id !== id);
        setTodoItems(updatedItems);
    }
    return(
        <>
            <header className="text-center text-light my-4">
                <h1 className="mb-5">Todo List</h1>
                <input
                    type="text"
                    className="form-control m-auto"
                    name="search"
                    placeholder="search todos"
                />
            </header>

            {todoItems.map(
            (i)=> <TodoItem
                key={i.id}
                item={i} completeTodoItem={completeTodoItem} deleteItem={deleteItem}/>
            )}

            <form className="add text-center my-4">
                <label htmlFor="add" className="add text-light">
                    Add a new todo:
                </label>
                <input
                    type="text"
                    className="form-control m-auto"
                    name="add"
                    id="add"
                />
            </form>

        </>
    )
}
export default Todo;