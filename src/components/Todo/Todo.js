import React, { useState, useEffect, useContext } from "react";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";
import TodoContext from "../Context/TodoContext";

const Todo = () => {
  let ctx = useContext(TodoContext);
  // const [countComplet,setCountComplet]=useState(0);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [results, setResults] = useState([]);

  const completeTodoItem = (id) => {
    const newTodoItem = ctx.todo.map((item) =>
      item.id === id ? { ...item, complete: !item.complete } : item
    );
    // const completedItems = ctx.todo.filter(item => item.completed);
    // setCountComplet(completedItems.length);

    // console.log(countComplet);

    ctx.setTodo(newTodoItem);
  };

  const deleteItem = (id) => {
    const updatedItems = ctx.todo.filter((item) => item.id !== id);
    ctx.setTodo(updatedItems);
  };

  const updateItem = (id) => {
    const newItem = prompt("Enter new Item :");
    const updateedItem = ctx.todo.map((item) => {
      if (item.id === id) {
        return { todo: newItem };
      }
      return item;
    });
    ctx.setTodo(updateedItem);
  };

  useEffect(() => {
    const results = ctx.todo.filter((item) =>
      item.todo.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setResults(results);
    setFilteredTodos(results);
  }, [ctx.todo, searchTerm]);

  const addTodoItem = (newItem) => {
    ctx.setTodo([...ctx.todo, newItem]);
  };

  return (
    <>
      <header className="text-center text-light my-4">
        <h1 className="mb-5">Todo List</h1>
        <input
          type="text"
          className={`form-control m-auto ${
            searchTerm !== "" && results.length === 0
              ? "is-invalid"
              : "is-valid"
          }`}
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="search todos"
        />
      </header>

      {filteredTodos.map((i) => (
        <TodoItems
          key={i.id}
          item={i}
          completeTodoItem={completeTodoItem}
          deleteItem={deleteItem}
          updateItem={updateItem}
        />
      ))}

      <p
        style={{
          margin: "10px",
        }}
      >
        To do size {ctx.todo.length}
      </p>
      <p>
        {" "}
        Completed: {ctx.todo.filter((item) => item.complete).length}/
        {ctx.todo.length}
      </p>

      <AddTodo addTodoItem={addTodoItem} />
    </>
  );
};

export default Todo;
