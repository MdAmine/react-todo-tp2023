import TodoItem from "./TodoItem";
import FormAdd from "./FormAdd";
import { useState } from "react";
const Todo = () =>{
    const generateId = () => Math.floor(Math.random() * 1000);
    const [todoItems,setTodoItems] = useState([
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
    const completeTodoItem=(id) =>{
        const newTodoItems =todoItems.map((item) => 
            item.id === id ? {...item, complete:!item.complete} : item
        )
        setTodoItems(newTodoItems);
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
        {todoItems.map((i)=> <TodoItem item={i} key={i.id} completeTodoItem={completeTodoItem}/>)}
        <FormAdd  />
      </>
    )
}
export default Todo