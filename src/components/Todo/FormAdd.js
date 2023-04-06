import React, {useRef, useState} from "react";

const FormAdd = (props) => {

    const [newTodo, setNewTodo] = useState("");
    const todoRef=useRef();
    const handleSubmit =(e) => {
        e.preventDefault();
        if (todoRef!="") {
            props.add(todoRef.current.value);
            todoRef.current.value=""
        }
    };




    return (
        <form className="add text-center my-4"  onSubmit={handleSubmit}>
            <label htmlFor="add" className="add text-light">
                Add a new todo:
            </label>
            <input
                type="text"
                className="form-control m-auto"
                name="add"
                id="add"
                ref={todoRef}
            />

        </form>
    )
}
export default FormAdd