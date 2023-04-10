import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faCheck,
  faPenToSquare,
  faTrashAlt,
  faXmark,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const TodoItem = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const DetailItem = () => {
    setShowDetails(!showDetails);
  };

  const options = {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };
  return (
    <>
      <ul className="list-group todos mx-auto text-light">
        <li
          className={`list-group-item d-flex justify-content-between align-items-center ${
            props.item.complete === true ? "item-complete" : ""
          }`}
        >
          <span>{props.item.todo}</span>
          <div>
            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={props.item.complete === true ? faXmark : faCheck}
              className="pointer"
              onClick={() => props.completeTodoItem(props.item.id)}
            />
            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={faPenToSquare}
              className="pointer"
              onClick={() => props.updateTodoItem(props.item.id)}
            />
            <FontAwesomeIcon
              style={{ marginRight: "0.3em" }}
              icon={faInfoCircle}
              className="pointer"
              onClick={DetailItem}
            />
            <FontAwesomeIcon
              icon={faTrashAlt}
              className="pointer"
              onClick={() => props.deleteItem(props.item.id)}
            />
            {props.item.priority === 1 && (
              <button
                className="badge bg-primary"
                onClick={() => props.updatePriority(props.item.id)}
              >
                P1
              </button>
            )}
            {props.item.priority === 2 && (
              <button
                className="badge bg-secondary"
                onClick={() => props.updatePriority(props.item.id)}
              >
                P2
              </button>
            )}
            {props.item.priority === 3 && (
              <button
                className="badge bg-success"
                onClick={() => props.updatePriority(props.item.id)}
              >
                P3
              </button>
            )}
            {props.item.priority === 4 && (
              <button
                className="badge bg-danger"
                onClick={() => props.updatePriority(props.item.id)}
              >
                P4
              </button>
            )}
          </div>
        </li>
      </ul>
      {showDetails && (
        <div className="details text-light">
          <p>ID: {props.item.id}</p>
          <p>Created: {props.item.todo}</p>
          <p>Completed: {props.item.complete ? "Yes" : "No"}</p>
          <p>
            CreatedAt :{props.item.createdAt.toLocaleString("en-US", options)}
          </p>
          <p>
            updatedAt :{props.item.updatedAt.toLocaleString("en-US", options)}
          </p>
          <p>priority :{props.item.priority}</p>
        </div>
      )}
    </>
  );
};

export default TodoItem;
