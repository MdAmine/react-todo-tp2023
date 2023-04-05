import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ item }) => {
  const [completed, setCompleted] = useState(item.completed);

  const handleComplete = () => {
    setCompleted(!completed);
  };

  return (
    <>
      <ul className="list-group todos mx-auto text-light">
        <li className={`list-group-item d-flex justify-content-between align-items-center ${completed ? "completed" : ""}`}>
          <span style={{textDecoration: completed ? "line-through" : "none"}}>{item.todo}</span>

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
            />
            <FontAwesomeIcon icon={faTrashAlt} className="pointer" />
          </div>
        </li>
      </ul>
    </>
  );
};

export default TodoItem;
