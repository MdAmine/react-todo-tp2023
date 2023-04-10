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
          </div>
        </li>
      </ul>
      {showDetails && (
        <div className="details text-light">
          <p>ID: {props.item.id}</p>
          <p>Created: {props.item.todo}</p>
          <p>Completed: {props.item.complete ? "Yes" : "No"}</p>
        </div>
      )}
    </>
  );
};

export default TodoItem;
