import { faBan, faCheck, faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoProvider";
import { Navigate, useNavigate } from "react-router-dom";
import UpdateTodoItem from "./UpdateTodoItem";


function TodoItem({ todo }) {

    const [showUpdateForm , handleUpdateTodoItem, setShowUpdateForm] = useState(false);

    const handleUpdateClick = () => {
        const updatedTodoItem = { ...todo };
        updatedTodoItem.todo = prompt("Update Todo", todo.todo);
        updatedTodoItem.complete = prompt("Update Complete", todo.complete);
        updatedTodoItem.priority = prompt("Update Priority", todo.priority);
    
        if (updatedTodoItem.todo !== null) {
          updatedTodoItem.updatedAt = new Date().toISOString().slice(0, 10);
          handleUpdateTodoItem(updatedTodoItem);
        }
      };

    const { completeItems, handleUpdate, handleDelete } = useContext(TodoContext)

    const navigate = useNavigate();

    return (
        <>
            <ul className="list-group todos mx-auto text-light" >
                <li
                    className={`list-group-item d-flex justify-content-between align-items-center priority-${todo.priority}`}
                >
                    <span>{todo.todo}</span>
                    <div>
                        <FontAwesomeIcon
                            style={{
                                marginRight: "0.3em",
                            }}
                            icon={todo.complete ? faBan : faCheck}
                            className="pointer"
                            onClick={() => (completeItems(todo.id))}
                        />

                        <FontAwesomeIcon
                            style={{
                                marginRight: "0.3em",
                            }}
                            icon={faPenToSquare}
                            className="pointer"
                            onClick={() => {
                                handleUpdateClick()
                                console.log("item: ", todo)
                            }}
                        />
                        
                        
                        <FontAwesomeIcon
                            icon={faTrashAlt}
                            className="pointer"
                            onClick={() => (handleDelete(todo.id))} />
                    </div>
                </li>
            </ul>
        </>
    );
}
export default TodoItem;  