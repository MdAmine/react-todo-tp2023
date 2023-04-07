import React, { useContext, useEffect, useState } from "react";
import "./Todo.css";
import TodoItem from "./TodoItem";
import FormAdd from "./FormAdd";
import TodosContext from "../context/context";

function Todo(props) {
  let todosContext = useContext(TodosContext);

  const [searchTerm, setSearchTerm] = useState("");

  const [filteredTodoItems, setFilteredTodoItems] = useState(
    todosContext.todoItems
  );

  const cunt = todosContext.todoItems.filter((item) => item.complete === false);

  useEffect(() => {
    const filteredItems = todosContext.todoItems.filter((item) =>
      item.todo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTodoItems(filteredItems);
  }, [todosContext.todoItems, searchTerm]);

  const completeTodoItem = (id) => {
    const newTodoItems = todosContext.todoItems.map((item) =>
      item.id === id ? { ...item, complete: !item.complete } : item
    );

    todosContext.setTodoItems(newTodoItems);
  };

  const deleteTodoItem = (id) => {
    const newTodoItems = todosContext.todoItems.filter(
      (item) => item.id !== id
    );
    todosContext.setTodoItems(newTodoItems);
  };

  const updateTodoItem = (item) => {
    let itesmTodo = prompt("Please enter todo item", item.todo);

    if (itesmTodo != null) {
      const newTodoItems = todosContext.todoItems.map((i) =>
        i.id === item.id ? { ...i, todo: itesmTodo } : i
      );
      todosContext.setTodoItems(newTodoItems);
    }
  };
  const addItem = (newTodo) => {
    const newTodoItem = {
      id: props.generateId(),
      todo: newTodo,
      complete: false,
    };
    todosContext.setTodoItems([...todosContext.todoItems, newTodoItem]);
  };

  return (
    <div>
      <header className="text-center text-light my-4">
        <h1 className="mb-5">Todo List</h1>
        <input
          type="text"
          className="form-control m-auto"
          name="search"
          placeholder="search todos"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      {filteredTodoItems.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          completeTodo={completeTodoItem}
          deleteItem={deleteTodoItem}
          updateItem={updateTodoItem}
        />
      ))}

      <h6 className="text-center text-light my-4">
        completed Todo : {cunt.length}/{todosContext.todoItems.length}
      </h6>

      <FormAdd add={addItem} />
    </div>
  );
}

export default Todo;
