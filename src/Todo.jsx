import FloatingButton from "./components/UI/FloatingButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faCheck,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import TodoItem from "./TodoItem";

const Todo = () => {
  const generateId = () => Math.floor(Math.random() * 1000);
  const [item, setItem] = useState("");
  const [todoItems, setTodoItems] = useState([
    {
      id: generateId(),
      todo: "Read books",
      complete: false,
    },
    {
      id: generateId(),
      todo: "Journaling",
      complete: false,
    },
    {
      id: generateId(),
      todo: "Make Dinner",
      complete: false,
    },
    {
      id: generateId(),
      todo: "Push-ups",
      complete: false,
    },
  ]);

  const addItem = () => {
    if (item.trim() !== "") {
      const newItem = {
        id: generateId(),
        todo: item,
        complete: false,
      };
      setTodoItems([...todoItems, newItem]);
      setItem("");
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
        />
      </header>
      {todoItems.map((i) => {
        return <TodoItem item={i} />;
      })}
      <form className="add text-center my-4">
        <label htmlFor="add" className="add text-light">
          Add a new todo:
        </label>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            name="add"
            id="add"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button
            type="button"
            onClick={addItem}
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default Todo;
