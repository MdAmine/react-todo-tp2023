import {useRef} from "react";
import "./Todo.css";

const TodoAdd = (props) => {
    const todoRef = useRef();
    const priorityRef = useRef();
    const add = (event) => {
        event.preventDefault();
        props.addTodoItem(todoRef.current.value, priorityRef.current.value);
        todoRef.current.value = "";
    };
    return (
        <form className="add text-center my-4" onSubmit={add}>
            <label htmlFor="add" className="add text-light">
                Add a new todo:
            </label>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control m-auto"
                    name="add"
                    id="add"
                    ref={todoRef}
                    required
                />
                <div className="input-group-append">
                    <input
                        type="number"
                        className="form-control m-1"
                        id="inputPriority"
                        name="inputPriority"
                        ref={priorityRef}
                        min={1}
                        max={4}
                        defaultValue={1}
                        required
                    />
                </div>
            </div>
            <input type="submit" className="form-control m-auto btn btn-dark" value="add"/>
        </form>
    );
};

export default TodoAdd;
