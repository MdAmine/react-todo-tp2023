import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faXmark,
  faEye,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./TodoItem.css";

const TodoItem = (props) => {
  const navigate = useNavigate();

  const badgeColor = () => {
    if (props.item.priority === 4) {
      return "bg-primary";
    }
    if (props.item.priority === 3) {
      return "bg-warning";
    }
    if (props.item.priority === 2) {
      return "bg-success";
    }
    if (props.item.priority === 1) {
      return "bg-danger";
    }
  };
  return (
    <>
      <ul className="list-group todos mx-auto text-light">
        <li
          className={`list-group-item d-flex justify-content-between align-items-center ${
            props.item.complete ? " item-complete" : ""
          }`}
        >
          <span>
            {props.item.todo}
            <span className={`badge ${badgeColor()}`}>
              P{props.item.priority}
            </span>
          </span>
          <div>
            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={props.item.complete ? faXmark : faCheck}
              className="pointer"
              onClick={() => props.completeTodoItem(props.item.id)}
            />

            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={faEye}
              className="pointer"
              onClick={() => {
                navigate("/detail/" + props.item.id);
              }}
            />

            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={faPenToSquare}
              className="pointer"
              onClick={() => props.updateTodoItem(props.item)}
            />

            <FontAwesomeIcon
              icon={faTrashAlt}
              className="pointer"
              onClick={() => props.deleteTodoItem(props.item.id)}
            />
          </div>
        </li>
      </ul>
    </>
  );
};
export default TodoItem;
