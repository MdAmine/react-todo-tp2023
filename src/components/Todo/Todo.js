import { useContext, useState } from "react";
import "./Todo.css";
import TodoAdd from "./TodoAdd";
import TodoItem from "./TodoItem";
import DetailContext from "../context";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const navigate = useNavigate();
  let context = useContext(DetailContext);
  let todoItems = context.todoList;
  const [todoItemsCopy, setTodoItemsCopy] = useState(todoItems);

  const completeTodoItem = (id) => {
    const todoItem = todoItems.map((item) =>
      item.id === id ? { ...item, complete: !item.complete } : item
    );
    context.setTodoItems(todoItem);
  };

  const deleteTodoItem = (id) => {
    context.setTodoItems(todoItems.filter((item) => item.id !== id));
  };

  const updateTodoItem = (todoItem) => {
    let updatedTodo = prompt("Please update todo item", todoItem.todo);
    if (updatedTodo != null) {
      const todoItemList = todoItems.map((item) =>
        item === todoItem ? { ...item, todo: updatedTodo } : item
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

  const addTodoItem = (event, newTodo) => {
    event.preventDefault();
    const newList = [
      ...todoItems,
      { id: Math.floor(Math.random() * 1000), todo: newTodo, complete: false },
    ];
    context.setTodoItems(newList);
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
        Finished tasks :{" "}
        {todoItems.filter((item) => item.complete === true).length}/
        {todoItems.length}{" "}
      </div>
      <TodoAdd addTodoItem={addTodoItem} />
    </>
  );
};
export default Todo;
