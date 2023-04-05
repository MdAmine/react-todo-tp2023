import { useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
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
  const updateTodoItems = (id) => {
    const newTodoItems = todoItems.map((item) => {
      if (item.id === id) {
        return { ...item, complete: true };
      }
      return item;
    });
    setTodoItems(newTodoItems);
    console.log(newTodoItems);
  };

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
      {todoItems.map((item) => (
        <TodoItem todoItem={item} updateItems={updateTodoItems} key={item.id} />
      ))}
    </>
  );
};
export default Todo;
