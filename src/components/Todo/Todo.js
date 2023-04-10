import { useContext, useState } from "react";
import ContextTodo from "../contexte/ContextTodo";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
const generateId = () => Math.floor(Math.random() * 1000);
function Todo() {
  const { todoItems, settodoItems } = useContext(ContextTodo);

  const checkTodoItem = (id) => {
    const index = todoItems.findIndex((item) => item.id === id);
    const itemToMove = todoItems[index];
    const newItems = todoItems.filter((item) => item.id !== id);
    itemToMove.complete = !itemToMove.complete;
    newItems.push(itemToMove);
    settodoItems(newItems);
    console.log(newItems);
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
    const date = new Date();
    const todoItem = {
      id: generateId(),
      todo: newItem.todo,
      complete: false,
      priority: newItem.priority,
      createdAt: date,
      editedAt: date,
    };
    settodoItems([...todoItems, todoItem]);
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
      item.todo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.priority.toLowerCase().includes(searchTerm.toLowerCase())
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
      const date = new Date();
      const updatedTodoItems = todoItems.map((item) =>
      
        item.id === id ? { ...item, todo: newItem ,editedAt:date} : item
        
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
