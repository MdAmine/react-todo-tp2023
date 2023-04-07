import React, { useState } from "react";

const AddTodo = ({addTodoItem}) => {
  const generateId = () => Math.floor(Math.random() * 1000);
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = (props) => {
    props.preventDefault();
    if (newTodo.trim()) {
      addTodoItem({
        id: generateId(),
        todo: newTodo,
        complete: false,
      });
    }
    setNewTodo("");
  };
  return (
    <>
      <form className="add text-center my-4" onSubmit={addTodo}>
        <label htmlFor="add" className="add text-light">
          Add a new todo:
        </label>
        <input
          type="text"
          className="form-control m-auto"
          name="add"
          id="add"
          value={newTodo}
          onChange={handleChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              addTodo(e);
            }
          }}
        />
      </form>
    </>
  );
};

export default AddTodo;
