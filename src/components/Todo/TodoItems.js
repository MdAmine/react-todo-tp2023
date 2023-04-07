import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPenToSquare,
  faTrashAlt,
  faBan,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
const TodoItems = (props) => {
  let navigation = useNavigate();
  // const history = useHistory();

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
              onClick={() => props.completeTodoItem(props.item.id)}
            />

            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={faEye}
              className="pointer"
              onClick={() => navigation(`/todo/${props.item.id}`)}
            />

            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={faPenToSquare}
              className="pointer"
              onClick={() => props.updateItem(props.item.id)}
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

export default TodoItems;
