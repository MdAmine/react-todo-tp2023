import { useState } from "react";
import "./Todo.css";
import TodoAdd from "./TodoAdd";
import TodoItem from "./TodoItem";

const Todo = () => {
  const generateId = () => Math.floor(Math.random() * 1000);

  const [todoItems, setTodoItems] = useState(
    [
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

  const completeTodoItem = (id) => {
    const todoItem = todoItems.map((item => item.id===id ? {...item, complete: !item.complete} : item))
    setTodoItems(todoItem)
  }
  
  return (
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

      {todoItems.map((i) => (
        <TodoItem key={i.id} item={i} completeTodoItem={completeTodoItem} />
      ))}

      <TodoAdd />
    </>
  );
};
export default Todo;
