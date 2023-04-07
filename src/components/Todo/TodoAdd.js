import { useRef } from "react";

const TodoAdd = (props) => {

  const inputRef = useRef();

  return (
    <>
      <form className="add text-center my-4" onSubmit={(event) => {
        props.addTodoItem(event, inputRef.current.value)
        inputRef.current.value = ""
      }}>
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
    </>
  );
};
export default TodoAdd;
