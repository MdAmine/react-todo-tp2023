import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBan, faCheck, faPenToSquare, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const TodoItem = (props) => {
    return (
        <>
            <ul className="list-group todos mx-auto text-light">
                <li
                    className={`list-group-item d-flex justify-content-between align-items-center ${
                         !props.item.complete ? "" : "item-complete"

                    }`}
                >
                    <span>{props.item.todo}</span>
                    <div>
                        <FontAwesomeIcon
                            style={{
                                marginRight: "0.3em",
                            }}
                             icon={props.item.complete ? faBan :faCheck}
                            className="pointer"
                            onClick={()=> props.completeTodo(props.item.id)}
                        />

                        <FontAwesomeIcon
                            style={{
                                marginRight: "0.3em",
                            }}
                            icon={faPenToSquare}
                            className="pointer"
                        />
                        <FontAwesomeIcon icon={faTrashAlt} className="pointer"/>
                    </div>
                </li>
            </ul>


        </>
    )

}

export default TodoItem;