import { faBaby, faCheck, faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TodoItem(props){
    const { todo } = props;



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
                            icon={props.todo.complete?  faBaby: faCheck}
                            className="pointer"
                            onClick={() => (props.completeItems(props.todo.id))}
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
}
export default TodoItem;