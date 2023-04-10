import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBan, faCheck, faEye, faFlag, faPenToSquare, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {useNavigate} from "react-router-dom";
import './todoItems.css'

function TodoItem(props) {
    let navigate = useNavigate()
    return (
        <>
            <ul className="list-group todos mx-auto text-light">
                <li
                    style={{
                        backgroundColor: props.item.complete ? '#3c3b45' : 'transparent',
                        textDecoration: props.item.complete ? 'line-through' : 'none'
                    }}
                    className={`list-group-item d-flex justify-content-between align-items-center`}
                >
                    <span>{props.item.todo}</span>

                    <div>
                        <FontAwesomeIcon
                            icon={faFlag}
                            style={{
                                marginRight: "0.3em",
                                color:
                                    props.item.priority === 1
                                        ? "red"
                                        : props.item.priority === 2
                                            ? "yellow"
                                                : "white"
                            }}
                        />
                        <FontAwesomeIcon
                            style={{

                                marginRight: "0.3em"
                            }}

                            icon={props.item.complete ? faBan : faCheck}
                            className="pointer"
                            onClick={() => props.completeTodoItem(props.item.id)}

                        />
                        <FontAwesomeIcon
                            style={{
                                marginRight: "0.3em"
                            }}
                            onClick={() => navigate(`/detail/${props.item.id}`)}
                            icon={faEye}>
                        </FontAwesomeIcon>
                        <FontAwesomeIcon
                            style={{
                                marginRight: "0.3em"
                            }}
                            icon={faPenToSquare}
                            className="pointer"
                            onClick={() => props.updateItem(props.item.id)}

                        />
                        <FontAwesomeIcon icon={faTrashAlt}
                                         className="pointer"
                                         onClick={() => props.deleteItem(props.item.id)}
                        />
                    </div>
                </li>
            </ul>
        </>
    )
}

export default TodoItem;