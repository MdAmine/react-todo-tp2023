import { icon } from "@fortawesome/fontawesome-svg-core";
import {
  faCheck,
  faPenToSquare,
  faTrashAlt,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoItem = (props) => {
  return (
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
  );
};
export default TodoItem;
