import { useRef } from "react";
function FormAdd(props) {

    const inputRef = useRef();
    const addItem= (e) =>{
        e.preventDefault();
        props.addTodoItem(inputRef.current.value)
        inputRef.current.value=""

    };

    return (
        <form className="add text-center my-4" onSubmit={addItem}>
            <label htmlFor="add" className="add text-light">
            Add a new todo:
            </label>
            <input
            type="text"
            className="form-control m-auto"
            name="add"
            id="add" 
            ref={inputRef}
             
            />
        </form>
    );

}
export default FormAdd;