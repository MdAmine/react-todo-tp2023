import {
  faCheck,
  faEye,
  faPenToSquare,
  faTrashAlt,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
function TodoItem2(props) {

  
  const handlePrompt = (id,value) =>{

    let item = prompt("Please enter your value", value);
    if (item != null) {
       props.updateTodoItem(id,item)
    }
  }

  const navigate = useNavigate();
  const goToDetail = (id,todo,complete) => {
    navigate("/detail/"+id);
  };
  
  const badge=(priority) =>{
    switch (priority) {
      case 1:   
        return "bg-primary"    
      case 2:   
        return "bg-secondary" 
      case 3:   
        return "bg-success"    
      case 4:   
        return "bg-danger"   
      default:
        return ""
    }
  }

  return (
    <ul className="list-group todos mx-auto text-light">
      <li
        className={`list-group-item d-flex justify-content-between align-items-center ${props.item.complete === true ? 'item-complete' : "" }` }
      >
        <span>{props.item.todo}</span>
        <div>
          <span className={`badge ${ badge(props.item.priority) }`}>{props.item.priority}</span>
          <FontAwesomeIcon
            style={{
              marginRight: "0.3em",
            }}
            icon={ props.item.complete === true ? faXmark : faCheck }
            className="pointer"
            onClick={() => props.completeTodoItem(props.item.id)}
          />

          <FontAwesomeIcon
            style={{
              marginRight: "0.3em",
            }}
            icon={ faEye }
            className="pointer"
            component={Link} 
            to="/about"
            onClick={() => goToDetail(props.item.id)}
          />

          <FontAwesomeIcon
            style={{
              marginRight: "0.3em",
            }}
            icon={faPenToSquare}
            className="pointer"
            onClick={() =>handlePrompt(props.item.id,props.item.todo)}
          />
          <FontAwesomeIcon icon={faTrashAlt} className="pointer" onClick={() => props.deleteTodoItem(props.item.id)}/>
          
        </div>
      </li>
    </ul>
  );
}
export default TodoItem2;
