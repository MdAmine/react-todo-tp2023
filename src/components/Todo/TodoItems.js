import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPenToSquare, faTrashAlt,faBan} from "@fortawesome/free-solid-svg-icons";

const TodoItems = (props) => {
return (
<> 
    <ul className="list-group todos mx-auto text-light">
        <li
           className={`list-group-item d-flex justify-content-between align-items-center ${
            !props.item.complete ? "" : "item-complete"
            }`}
        >
          <span>Sport</span>
          <div>
            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={props.item.complete ? faBan  :faCheck }
              className="pointer"
              onClick={()=>props.completeTodoItem(props.item.id)}
            />

            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={faPenToSquare}
              className="pointer"
            />
            <FontAwesomeIcon
             icon={faTrashAlt}
              className="pointer" 
              onClick={()=>props.deleteItem(props.item.id)}/>
          </div>
        </li>
    </ul>
</>  
  )
}

export default TodoItems