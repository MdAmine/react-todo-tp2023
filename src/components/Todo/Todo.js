import { useContext, useState } from "react";
import ContextTodo from "../contexte/ContextTodo";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function Todo() {
  const { todoItems, settodoItems } = useContext(ContextTodo);

  const checkTodoItem = (id) => {
    const newItem = todoItems.map((item) =>
      item.id === id ? { ...item, complete: !item.complete } : item
    );
    settodoItems(newItem);
    console.log(newItem);
  };


  const removeTodoItem = (id) => {
    if (
      window.confirm("Êtes-vous sûr de bien vouloir supprimer cet élément?")
    ) {
      const index = todoItems.findIndex((item) => item.id === id);
      if (index > -1) {
        const newItems = [...todoItems];
        newItems.splice(index, 1);
        settodoItems(newItems);
      }
    } else {
      console.log("cancel");
    }
  };


  const addTodoItem = (newItem) => {
    settodoItems([...todoItems, newItem]);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const searchInput = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === "") {
      setSearchResult([]);
    }
  };
  const searchTodoItem = () => {
    const result = todoItems.filter((item) =>
      item.todo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResult(result);
  };

  const updateTodoItem = (id) => {
    const itemToUpdate = todoItems.find((item) => item.id === id);
    const newItem = prompt("Modifier Todo", itemToUpdate.todo);

    if (newItem === null) {
      return;
    } else if (newItem === "") {
      alert("Veuillez remplir le champ");
    } else {
      const updatedTodoItems = todoItems.map((item) =>
        item.id === id ? { ...item, todo: newItem } : item
      );
      settodoItems(updatedTodoItems);
    }
  };
  return (
    <>
      <header className="text-center text-light my-4">
        <h1 className="mb-5">Todo List</h1>
        <input
          type="text"
          className={`form-control m-auto ${
            searchTerm !== "" && searchResult.length === 0
              ? "is-invalid"
              : "is-valid"
          }`}
          name="search"
          placeholder="search todos"
          value={searchTerm}
          onChange={searchInput}
          onKeyDown={searchTodoItem}
          searchTodoItem={searchTodoItem}
        />
      </header>
      {searchResult.length > 0
        ? searchResult.map((i) => (
            <TodoItem
              item={i}
              key={i.id}
              checkTodoItem={checkTodoItem}
              removeTodoItem={removeTodoItem}
              updateTodoItem={updateTodoItem}
            />
          ))
        : todoItems.map((i) => (
            <TodoItem
              item={i}
              key={i.id}
              checkTodoItem={checkTodoItem}
              removeTodoItem={removeTodoItem}
              updateTodoItem={updateTodoItem}
            />
          ))}

      <TodoForm addTodoItem={addTodoItem} />
    </>
  );
}

export default Todo;
