import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faPenToSquare,
    faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import TodoItem from './todoItem';



function TodoList() {

    const generateId = () => Math.floor(Math.random() * 1000);

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

    const completeItems = (id) => {
        const newCompleteItems = todoItems.map((item) =>
          item.id === id ? { ...item, complete: !item.complete } : item
        );
        setTodoItems(newCompleteItems);
        console.log(newCompleteItems)
      };

    

    return (
        <div className="container">
            <header className="text-center text-light my-4">
                <h1 className="mb-5">Todo List</h1>
                <input
                    type="text"
                    className="form-control m-auto"
                    name="search"
                    placeholder="search todos"
                />
            </header>

            {todoItems.map((todo) => 
                 <TodoItem todo={todo} key={todo.id} completeItems={completeItems}/>
                 
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
        </div>
    );
}
export default TodoList;