import React, { useState, useContext, useEffect } from "react";
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
  const [priority, setPriority] = useState(1);
  const { todoItems, setTodoItems } = useContext(MyContexte);
  const [copieTodoItems, setCopieTodoItem] = useState(todoItems);
  const completeTodoItem = (id) => {
    const newTodoItems = todoItems.map((item) =>
      item.id === id ? { ...item, complete: !item.complete } : item
    );

    const sortedTodoItems = newTodoItems.sort((a, b) => {
      if (a.complete && !b.complete) {
        return 1;
      } else if (!a.complete && b.complete) {
        return -1;
      } else {
        return 0;
      }
    });
    setTodoItems(sortedTodoItems);
  };

  const deleteItem = (id) => {
    const deletedItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(deletedItems);
  };
  const updateTodoItem = (id) => {
    const itemToUpdate = todoItems.find((item) => item.id === id);
    const result = prompt("Please enter a new value:", itemToUpdate.todo);
    if (result !== null) {
      console.log("User entered: " + result);
      const updatedItems = todoItems.map((item) =>
        item.id === id
          ? {
              ...item,
              todo: result,

              updatedAt: new Date(),
            }
          : item
      );
      setTodoItems(updatedItems);
      setCopieTodoItem(updatedItems);
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
        priority: priority,
        createdAt: new Date(),
        updatedAt: "",
      };
      setTodoItems([...todoItems, newItem]);
      setItem("");
      console.log(newItem.priority);
      setCopieTodoItem([...todoItems, newItem]);
    }
  };
  const updatePriority = (id) => {
    const itemToUpdate = todoItems.find((item) => item.id === id);
    const priorityResult = prompt(
      "Please enter a new priority (1-4):",
      itemToUpdate.priority
    );
    if (priorityResult !== null) {
      const updatedPriority = parseInt(priorityResult);
      if (updatedPriority >= 1 && updatedPriority <= 4) {
        const updatedItems = todoItems.map((item) =>
          item.id === id ? { ...item, priority: updatedPriority } : item
        );
        setTodoItems(updatedItems);
        setCopieTodoItem(updatedItems);
      } else {
        alert("Invalid priority. Please enter a value between 1 and 4.");
      }
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
        <button className="badge bg-primary">P1</button>
        <button className="badge bg-secondary">P2</button>
        <button className="badge bg-success">P3</button>
        <button className="badge bg-danger">P4</button>
        <div>
          <span>{numCompletedItems} completed</span>
        </div>
      </header>
      {todoItems.map((i) => (
        <TodoItem
          key={i.id}
          item={i}
          completeTodoItem={completeTodoItem}
          deleteItem={deleteItem}
          updateTodoItem={updateTodoItem}
          updatePriority={updatePriority}
        />
      ))}
      <TodoForm
        item={item}
        setItem={setItem}
        addItem={addItem}
        setPriority={setPriority}
      />
    </>
  );
}

export default Todo;
