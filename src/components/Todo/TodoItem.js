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
  const navigate = useNavigate();

  return (
    <>
      <ul className="list-group todos mx-auto text-light">
        <li
          className={`list-group-item d-flex justify-content-between align-items-center ${
            props.item.complete ? "item-complete" : ""
          }`}
        >
          
          <span>
            <span
              className={`badge  ${
                props.item.priority == 1
                  ? "bg-danger"
                  : props.item.priority == 2
                  ? "bg-warning"
                  : props.item.priority == 3
                  ? "bg-success"
                  : "bg-primary"
              }`}
              onClick={() => props.filterItem(props.item.priority)}
            >
              P {props.item.priority}
            </span> { "  " }
            {props.item.todo}
          </span>
          <div>
            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={faEye}
              className="pointer"
              onClick={() => {
                console.log(props.item.id);
                navigate("/Detail/" + props.item.id);
              }}
            />
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
export default TodoItem;
