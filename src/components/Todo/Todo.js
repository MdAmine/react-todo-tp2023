import { useContext, useEffect, useState } from "react";
import "./Todo.css";
import TodoAdd from "./TodoAdd";
import TodoItem from "./TodoItem";
import TodoItemContext from "../../contexts/TodoItemContext";

const Todo = () => {
  let ctx = useContext(TodoItemContext);
  const generateId = () => Math.floor(Math.random() * 1000);

  const [searchValue, setSearchValue] = useState("");
  const [filteredTodos, setFilteredTodos] = useState(ctx.todoItems);

  const completeTodoItem = (id) => {
    const newTodoItems = ctx.todoItems.map((item) =>
      item.id === id ? { ...item, complete: !item.complete } : item
    );
    ctx.setTodoItems(newTodoItems);
  };

  const deleteTodoItem = (id) => {
    ctx.setTodoItems(ctx.todoItems.filter((i) => i.id !== id));
  };

  const updateTodoItem = (item) => {
    const newTodoItems = ctx.todoItems.map((i) =>
      i.id === item.id ? { ...i, todo: item.todo } : i
    );
    ctx.setTodoItems(newTodoItems);
  };

  useEffect(() => {
    const filteredTodos = ctx.todoItems.filter((item) =>
      item.todo.toLowerCase().includes(searchValue.toLowerCase())
    );
    filteredTodos.sort((a, b) => a.complete - b.complete);
    setFilteredTodos(filteredTodos);
  }, [searchValue, ctx.todoItems]);

  const addTodoItem = (todo) => {
    const existingItem = filteredTodos.find((item) => item.todo === todo);
    if (existingItem) {
      alert("Item already exists!!");
      return;
    }
    const newTodoItem = { id: generateId(), todo, complete: false };
    const newTodoItems = [newTodoItem, ...filteredTodos];
    ctx.setTodoItems(newTodoItems);
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
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </header>

      {filteredTodos.map((i) => (
        <TodoItem
          key={i.id}
          item={i}
          completeTodoItem={completeTodoItem}
          deleteTodoItem={deleteTodoItem}
          updateTodoItem={updateTodoItem}
        />
      ))}

      <div className="text-center text-light my-4">
        <h6>There is {ctx.todoItems.length} items</h6>
        <h6>
          Completed:{" "}
          {ctx.todoItems.reduce(
            (count, item) => count + (item.complete ? 1 : 0),
            0
          )}
          /{ctx.todoItems.length}
        </h6>
      </div>

      <TodoAdd addTodoItem={addTodoItem} />
    </>
  );
};

export default Todo;
