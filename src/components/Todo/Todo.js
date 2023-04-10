import { useContext, useEffect, useState } from "react";
import "./Todo.css";
import TodoAdd from "./TodoAdd";
import TodoItem from "./TodoItem";
import TodoContext from "../context";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const navigate = useNavigate();
  let context = useContext(TodoContext);
  let todoItems = context.todoList;
  const [todoItemsCopy, setTodoItemsCopy] = useState(todoItems);

  // useEffect(() => setTodoItemsCopy(todoItems), [todoItems])

  const completeTodoItem = (id) => {
    const todoItem = todoItems.map((item) =>
      item.id === id ? { ...item, complete: !item.complete } : item
    );
    context.setTodoItems(todoItem);
    setTodoItemsCopy(todoItem);
  };

  const deleteTodoItem = (id) => {
    context.setTodoItems(todoItems.filter((item) => item.id !== id));
  };

  const updateTodoItem = (todoItem) => {
    let updatedTodo = prompt("Please update todo item", todoItem.todo);
    if (updatedTodo != null) {
      const todoItemList = todoItems.map((item) =>
        item === todoItem
          ? { ...item, todo: updatedTodo, updatedAt: new Date() }
          : item
      );
      context.setTodoItems(todoItemList);
    }
  };

  const searchTodoItem = (event) => {
    const todoSearched = todoItemsCopy.filter((item) =>
      item.todo.toLowerCase().includes(event.target.value)
    );
    context.setTodoItems(todoSearched);
  };

  const addTodoItem = (event, newTodo, newPriority) => {
    event.preventDefault();
    const newList = [
      ...todoItems,
      {
        id: Math.floor(Math.random() * 1000),
        todo: newTodo,
        complete: false,
        priority: +newPriority,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    context.setTodoItems(newList);
    setTodoItemsCopy(newList);
  };

  const filterByPriority = (e, priority) => {
    e.preventDefault();
    if (priority !== 0) {
      context.setTodoItems(
        todoItemsCopy.filter((item) => item.priority === priority)
      );
    }
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
          onChange={(event) => searchTodoItem(event)}
        />
        <div className="filter-prio">
          <p>Filter priority : </p>
          <div className="buttons">
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => context.setTodoItems(todoItemsCopy)}
            >
              All
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={(e) => filterByPriority(e, 1)}
            >
              P1
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={(e) => filterByPriority(e, 2)}
            >
              P2
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={(e) => filterByPriority(e, 3)}
            >
              P3
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={(e) => filterByPriority(e, 4)}
            >
              P4
            </button>
          </div>
        </div>
      </header>

      {todoItems.map((i) => (
        <TodoItem
          key={i.id}
          item={i}
          completeTodoItem={completeTodoItem}
          deleteTodoItem={deleteTodoItem}
          updateTodoItem={updateTodoItem}
        />
      ))}

      <div style={{ color: "white", padding: 5 }}>
        Finished todo :{" "}
        {todoItemsCopy.filter((item) => item.complete === true).length}/
        {todoItemsCopy.length}{" "}
      </div>
      <TodoAdd addTodoItem={addTodoItem} />
    </>
  );
};

export default Todo;
