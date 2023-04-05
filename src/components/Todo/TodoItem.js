import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPenToSquare, faTrashAlt,faBan} from "@fortawesome/free-solid-svg-icons";
import React from "react";

function TodoItem(props){

    return (
        <>
            <ul className="list-group todos mx-auto text-light" >
                <li
                    style={{
                        backgroundColor:  props.item.complete ? '#3c3b45' : 'transparent' 
                    }}
                    className={`list-group-item d-flex justify-content-between align-items-center`}
                >
                    <span>{props.item.todo}</span>
                    <div >
                        <FontAwesomeIcon
                            style={{

                                marginRight: "0.3em"
                            }}

                            icon={props.item.complete ? faBan  :faCheck }
                            className="pointer"
                            onClick={()=>props.completeTodoItem(props.item.id)}

                        />

                        <FontAwesomeIcon
                            style={{
                                marginRight: "0.3em"
                            }}
                            icon={faPenToSquare}
                            className="pointer"

                        />
                        <FontAwesomeIcon icon={faTrashAlt}
                                         className="pointer"
                                         onClick={()=>props.deleteItem(props.item.id)}
                        />
                    </div>
                </li>
            </ul>



        </>
    )
}
export default TodoItem;