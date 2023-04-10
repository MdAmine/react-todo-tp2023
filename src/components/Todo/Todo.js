import React, { useState, useContext } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import Login from "../Login/Login";
import FloatingButton from "../UI/FloatingButton";

import MyContexte from "../ContextKhadija";
function Todo({ handleLogout }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const generateId = () => Math.floor(Math.random() * 1000);
  const [item, setItem] = useState("");

  //useEffect(() => {});
  const { todoItems, setTodoItems } = useContext(MyContexte);
  const [copieTodoItems, setCopieTodoItem] = useState(todoItems);

  const completeTodoItem = (id) => {
    const newTodoItems = todoItems.map((item) =>
      item.id === id ? { ...item, complete: !item.complete } : item
    );
    setTodoItems(newTodoItems);
  };
  const sortedTodoItems = todoItems.sort((a, b) => {
    if (a.complete && !b.complete) {
      return 1;
    } else if (!a.complete && b.complete) {
      return -1;
    } else {
      return 0;
    }
  });
  const deleteItem = (id) => {
    const deletedItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(deletedItems);
  };
  const updateTodoItem = (id) => {
    const result = prompt("Please enter a new value:");
    if (result !== null) {
      console.log("User entered: " + result);
      const updatedItems = todoItems.map((item) =>
        item.id === id ? { ...item, todo: result } : item
      );
      setTodoItems(updatedItems);
    }
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const searchTerm = event.target.value;
    const searchedItem = searchTerm
      ? copieTodoItems.filter((item) =>
          item.todo.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : copieTodoItems;
    setTodoItems(searchedItem);
  };

  const addItem = (e) => {
    e.preventDefault();
    if (item.trim() !== "") {
      const newItem = {
        id: generateId(),
        todo: item,
        complete: false,
      };
      setTodoItems([...todoItems, newItem]);
      setItem("");
    }
  };
  const numCompletedItems = todoItems.filter((item) => item.complete).length;

  return (
    <>
      <FloatingButton handleLogout={handleLogout} />
      <header className="text-center text-light my-4">
        <h1 className="mb-5">Todo List</h1>
        <input
          type="text"
          className="form-control m-auto"
          name="search"
          placeholder="search todos"
          onChange={handleInputChange}
        />
        <div>
          <span>{numCompletedItems} completed</span>
        </div>
      </header>
      {sortedTodoItems.map((i) => (
        <TodoItem
          key={i.id}
          item={i}
          completeTodoItem={completeTodoItem}
          deleteItem={deleteItem}
          updateTodoItem={updateTodoItem}
        />
      ))}
      <TodoForm item={item} setItem={setItem} addItem={addItem} />
    </>
  );
}

export default Todo;
