import { faBan, faCheck, faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";

function TodoItem({ todo }){

    const { completeItems, handleUpdate, handleDelete } = useContext(TodoContext)

    return (
        <>
            <ul className="list-group todos mx-auto text-light" >
                <li
                    className={`list-group-item d-flex justify-content-between align-items-center`}
                >
                    <span>{todo.todo}</span>
                    <div>
                        <FontAwesomeIcon
                            style={{
                                marginRight: "0.3em",
                            }}
                            icon={todo.complete?  faBan: faCheck}
                            className="pointer"
                            onClick={() => (completeItems(todo.id))}
                        />

                        <FontAwesomeIcon
                            style={{
                                marginRight: "0.3em",
                            }}
                            icon={faPenToSquare}
                            className="pointer"
                            onClick={() => {handleUpdate(todo);
                                            console.log("item: ",todo)
                                }}
                        />
                        
                        <FontAwesomeIcon 
                            icon={faTrashAlt} 
                            className="pointer" 
                            onClick={() => (handleDelete(todo.id))}/>
                    </div>
                </li>
            </ul>
        </>
    );
}
export default TodoItem;  