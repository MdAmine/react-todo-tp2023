import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPenToSquare,
  faTrashAlt,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ item, onDelete, onEdit }) => {
  const [completed, setCompleted] = useState(item.complete);
  const [editing, setEditing] = useState(false);
  const [todo, setTodo] = useState(item.todo);
  const [showDetails, setShowDetails] = useState(false);

  const handleComplete = () => {
    setCompleted(!completed);
  };

  const handleDelete = () => {
    onDelete(item.id);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    onEdit({ ...item, todo });
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <ul className="list-group todos mx-auto text-light">
        {editing ? (
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <input
              type="text"
              value={todo}
              onChange={handleChange}
              className="form-control"
            />
            <div>
              <button onClick={handleSave}>Save</button>
            </div>
          </li>
        ) : (
          <li
            className={`list-group-item d-flex justify-content-between align-items-center ${
              completed ? "completed" : ""
            }`}
          >
            <span
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              {item.todo}
            </span>

            <div>
              <FontAwesomeIcon
                style={{ marginRight: "0.3em" }}
                icon={faCheck}
                className={`pointer ${completed ? "disabled" : ""}`}
                onClick={handleComplete}
              />

              <FontAwesomeIcon
                style={{ marginRight: "0.3em" }}
                icon={faPenToSquare}
                className="pointer"
                onClick={handleEdit}
              />

              <FontAwesomeIcon
                style={{ marginRight: "0.3em" }}
                icon={faInfoCircle}
                className="pointer"
                onClick={handleDetails}
              />

              <FontAwesomeIcon
                icon={faTrashAlt}
                className="pointer"
                onClick={handleDelete}
              />
            </div>
          </li>
        )}
      </ul>

      {showDetails && (
        <div className="details text-light">
          <p>ID: {item.id}</p>
          <p>Created: {item.todo}</p>
          <p>Completed: {item.complete ? "Yes" : "No"}</p>
        </div>
      )}
    </>
  );
};

export default TodoItem;
