import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faInfoCircle,
  faPenToSquare,
  faTrashAlt,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const TodoItem = (props) => {
  return (
    <>
      <ul className="list-group todos mx-auto text-light">
        <li
          className={`list-group-item d-flex justify-content-between align-items-center ${
            props.todoItem.complete === true ? "item-complete" : ""
          }`}
        >
          <span>{props.todoItem.todo}</span>
          <div>
            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={faInfoCircle}
              className="pointer"
              onClick={() => props.viewItems(props.todoItem.id)}
            />
            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={props.todoItem.complete ? faXmark : faCheck}
              className="pointer"
              onClick={() => props.updateCompleteItems(props.todoItem.id)}
            />

            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={faPenToSquare}
              className="pointer"
              onClick={() =>
                props.editItems(props.todoItem.id, props.todoItem.todo)
              }
            />
            <FontAwesomeIcon
              icon={faTrashAlt}
              className="pointer"
              onClick={() => props.deleteItems(props.todoItem.id)}
            />
          </div>
        </li>
      </ul>
    </>
  );
};
export default TodoItem;
