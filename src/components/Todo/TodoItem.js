import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faCheck,
  faEye,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";
const TodoItem = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <ul className="list-group todos mx-auto text-light">
        <li
          className={`list-group-item d-flex justify-content-between align-items-center ${
            !props.item.complete ? "" : "item-complete"
          }`}
        >
          <span>{props.item.todo}</span>
          <div>
            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={props.item.complete ? faBan : faCheck}
              className="pointer"
              onClick={() => props.completeTodo(props.item.id)}
            />
            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={faEye}
              className="pointer"
              onClick={() => navigate("/detail/" + props.item.id + "/")}
            />

            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={faPenToSquare}
              className="pointer"
              onClick={() => props.updateItem(props.item)}
            />
            <FontAwesomeIcon
              icon={faTrashAlt}
              className="pointer"
              onClick={() => props.deleteItem(props.item.id)}
            />
          </div>
        </li>
      </ul>
    </>
  );
};

export default TodoItem;
