
  import { useState } from "react";

  const TodoForm = ({ addTodoItem  }) => {
    
  const generateId = () => Math.floor(Math.random() * 1000);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = (props) => {

    props.preventDefault();

    if (newTodo.trim()) {
      addTodoItem ({
        id: generateId(),
        todo: newTodo.trim(),
        complete: false,
      });

      setNewTodo("");
    }
  };

  const newTodoChange = (event) => {
    setNewTodo(event.target.value);
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
      </form>
    </>
  );
};

export default TodoForm;
