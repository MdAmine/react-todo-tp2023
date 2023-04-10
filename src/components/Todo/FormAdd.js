import React, { useRef } from "react";

const FormAdd = (props) => {
  const todoRef = useRef();
    const priorityRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoRef.current.value !== "") {
      props.add(todoRef.current.value,priorityRef.current.value);

      todoRef.current.value = "";
    }
  };

  return (
      <form className="add text-center my-4" onSubmit={handleSubmit} >
          <label htmlFor="add" className="add text-light">
              Add a new todo:
          </label>
          <div className="input-group mb-3">
              <input
                  type="text"
                  className="form-control m-auto"
                  name="inputAdd"
                  id="inputAdd"
                  ref={todoRef}
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
                  />
              </div>
          </div>
          <input className="form-control m-auto  btn btn-dark" type="submit" value="Add"/>
      </form>
  );
};
export default FormAdd;
