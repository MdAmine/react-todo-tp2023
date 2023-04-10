import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faCheck,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function TodoItem(props) {
  return (
    <>
      <ul className="list-group todos mx-auto text-light">
        <li
          style={{
            backgroundColor: props.item.complete ? "#3c3b45" : "transparent",
          }}
          className={`list-group-item d-flex justify-content-between align-items-center`}
        >
          <Link
            to={`/detail/${props.item.id}/${props.item.todo}/${props.item.complete}/${props.item.priority}/${props.item.createdAt}/${props.item.editedAt}`}
            style={{ textDecoration: "none",color:"white" }}
          >
            <div style={{ display:"flex",justifyContent:"center",alignItems:"center",gap:100 }}>
            <span>{props.item.todo}</span>
            <span style={{ color: 'blue', alignText:'center' }}>{props.item.priority}</span>
            </div>
          </Link>
          <div>
            <FontAwesomeIcon
              onClick={() => props.checkTodoItem(props.item.id)}
              style={{
                marginRight: "0.3em",
              }}
              icon={props.item.complete ? faBan : faCheck}
              className="pointer"
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
              icon={faTrashAlt}
              className="pointer"
              onClick={() => props.removeTodoItem(props.item.id)}
            />
          </div>
        </li>
      </ul>
    </>
  );
}

export default TodoItem;
