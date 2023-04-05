import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBaby,
  faCheck,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

const TodoItem = (props) => {
  return (
    <>
      <ul className="list-group todos mx-auto text-light">
        <li
          className={`list-group-item d-flex justify-content-between align-items-center`}
        >
          <span>{props.todoItem.todo}</span>
          <div>
            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={props.todoItem.complete ? faCheck:faBaby}
              className="pointer"
              onClick={() => props.updateItems(props.todoItem.id)}
            />

            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
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
