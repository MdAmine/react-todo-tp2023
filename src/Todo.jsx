import React, { useState, useContext } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import FloatingButton from "./components/UI/FloatingButton";
import { AppContext } from "./App";
import ContexteSaad from "./ContexteSaad";

const Todo = ({ handleLogout }) => {
  const generateId = () => Math.floor(Math.random() * 1000);
  const [item, setItem] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Get the todoItems and setTodoItems values from the context
  const { todoItems, setTodoItems } = useContext(ContexteSaad);

  const addItem = () => {
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

  const deleteItem = (id) => {
    setTodoItems(todoItems.filter((item) => item.id !== id));
  };

  const editItem = (updatedItem) => {
    setTodoItems(
      todoItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  const filteredItems = todoItems.filter((item) =>
    item.todo.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>
      {filteredItems.map((i) => {
        return (
          <TodoItem key={i.id} item={i} onDelete={deleteItem} onEdit={editItem} />
        );
      })}
      <Form item={item} setItem={setItem} addItem={addItem} />
    </>
  );
};

export default Todo;
