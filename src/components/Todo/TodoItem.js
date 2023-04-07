import {
  faBan,
  faCheck,
  faEye,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const TodoItem = (props) => {
  const navigation = useNavigate();

  const showDetails = () => {
    navigation(`/details/${props.item.id}`);
  };

  return (
    <ul className="list-group todos mx-auto text-light">
      <li
        className={`list-group-item d-flex justify-content-between align-items-center ${
          props.item.complete ? "item-complete" : ""
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
            onClick={showDetails}
          />

          <FontAwesomeIcon
            style={{
              marginRight: "0.3em",
            }}
            icon={faPenToSquare}
            className="pointer"
            onClick={() => {
              props.item.todo = prompt("Update Todo Item", props.item.todo);
              if (props.item.todo != null) {
                props.updateTodoItem(props.item);
              }
            }}
          />
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="pointer"
            onClick={() => props.deleteTodoItem(props.item.id)}
          />
        </div>
      </li>
    </ul>
  );
};

export default TodoItem;
