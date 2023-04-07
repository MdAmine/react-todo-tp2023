import { useRef } from "react";

const TodoAdd = (props) => {
  const todoRef = useRef();
  const add = (event) => {
    event.preventDefault();
    props.addTodoItem(todoRef.current.value);
    todoRef.current.value = "";
  };
  return (
    <form className="add text-center my-4" onSubmit={add}>
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
  );
};

export default TodoAdd;
