import React, { useState } from "react";

const AddTodo = ({ addTodoItem }) => {
  const generateId = () => Math.floor(Math.random() * 1000);
  const [newTodo, setNewTodo] = useState("");
  const [priority,setPriority]=useState(1);
  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = (props) => {
    props.preventDefault();
    const createdDate = new Date().getTime();
    if (newTodo.trim()) {
      addTodoItem({
        id: generateId(),
        todo: newTodo,
        complete: false,
        priority:priority,
        createdAT: createdDate,
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
        <div className="priority">
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
          <input
            style={{
              marginLeft:"10px",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              color: "white",
              border: "none",
              textAlign:"center",
              borderRadius:"4px"

            }}
            // defaultValue="1"
            type="number"
            max="4"
            min="1"
            value={priority}
            onChange={(e)=>setPriority(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default AddTodo;
