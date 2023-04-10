import { useState } from "react";

const TodoForm = ({ addTodoItem }) => {
  const generateId = () => Math.floor(Math.random() * 1000);

  const [newTodo, setNewTodo] = useState("");
  const [priority, setPriority] = useState("low");

  const addTodo = (event) => {
    event.preventDefault();

    if (newTodo.trim()) {
      addTodoItem({
        id: generateId(),
        todo: newTodo.trim(),
        complete: false,
        priority: priority,
      });

      setNewTodo("");
      setPriority("low");
    }
  };

  const newTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const priorityChange = (event) => {
    setPriority(event.target.value);
  };

  return (
    <>
      <form className="add text-center my-4" onSubmit={addTodo}>
        <label htmlFor="add" className="add text-light">
          Add a new todo
        </label>
        <input
          type="text"
          className="form-control m-auto"
          name="add"
          id="add"
          value={newTodo}
          onChange={newTodoChange}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              addTodo(event);
            }
          }}
        />
        <label htmlFor="priority" className="mt-3" style={{color:"white"}}>
          Priority:
        </label>
        <select
          name="priority"
          id="priority"
          className="form-control"
          value={priority}
          onChange={priorityChange}
          required
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit" className="btn btn-success mt-3">
          Add
        </button>
      </form>
    </>
  );
};

export default TodoForm;