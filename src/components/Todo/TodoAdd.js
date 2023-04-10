import { useRef } from "react";

const TodoAdd = (props) => {
  const inputRef = useRef();
  const selectRef = useRef();

  return (
    <>
      <form
        className="add text-center my-4"
        onSubmit={(event) => {
          props.addTodoItem(
            event,
            inputRef.current.value,
            selectRef.current.value
          );
          inputRef.current.value = "";
          selectRef.current.value = 1;
        }}
      >
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
        <select
          className="form-select"
          id= "select"
          aria-label="select priority"
          ref={selectRef}
        >
          <option disabled>select priority</option>
          <option defaultValue value="1">
            1
          </option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </form>
    </>
  );
};
export default TodoAdd;
