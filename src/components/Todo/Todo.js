import React, { useState, useEffect, useContext } from "react";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";
import TodoContext from "../Context/TodoContext";

const Todo = () => {
  let ctx = useContext(TodoContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [results, setResults] = useState([]);

  const completeTodoItem = (id) => {
    const newTodoItem = ctx.todo.map((item) =>
      item.id === id ? { ...item, complete: !item.complete } : item
    );

    ctx.setTodo(newTodoItem);
  };

  const deleteItem = (id) => {
    const updatedItems = ctx.todo.filter((item) => item.id !== id);
    ctx.setTodo(updatedItems);
  };

  const updateItem = (id) => {
    const newItem = prompt("Enter new Item :");
    const updatedPriority = prompt("Enter new priority :");

    const updatedAT = new Date().getTime();
    const updateedItem = ctx.todo.map((item) => {
      if (item.id == id) {
        console.log("updated");
        return {
          ...item,
          todo: newItem,
          updatedAt: updatedAT,
          priority: updatedPriority,
        };
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
  const filterByPriority=(priority) =>{
    if(priority!=null){
      const newTodoItems = ctx.todo.filter((item) => item.priority == priority);
      setFilteredTodos(newTodoItems);
      console.log(newTodoItems);
    }else setFilteredTodos(ctx.todo);
    
  }

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

      <div className="input-group mt-2">
      <button
          onClick={() => filterByPriority()}
          className="form-control btn btn-light btn-sm"
        >
          All
        </button>
        <button
          onClick={() => filterByPriority(1)}
          className="form-control btn btn-danger btn-sm"
        >
          P1
        </button>
        <button
          onClick={() => filterByPriority(2)}
          className="form-control btn btn-warning btn-sm"
        >
          P2
        </button>
        <button
          onClick={() => filterByPriority(4)}
          className="form-control btn btn-primary btn-sm"
        >
          P3
        </button>
        <button
          onClick={() => filterByPriority(3)}
          className="form-control btn btn-success btn-sm"
        >
          P4
        </button>
      </div>

      {filteredTodos.map((i) => (
        <TodoItems
          key={i.id}
          item={i}
          completeTodoItem={completeTodoItem}
          deleteItem={deleteItem}
          updateItem={updateItem}
        />
      ))}

      {/* <p>To do size {ctx.todo.length}</p> */}
      <p
        style={{
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        {" "}
        Completed: {ctx.todo.filter((item) => item.complete).length}/
        {ctx.todo.length}
      </p>

      <AddTodo addTodoItem={addTodoItem} />
    </>
  );
};

export default Todo;
