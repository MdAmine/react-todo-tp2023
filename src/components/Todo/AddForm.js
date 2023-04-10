import React, {useRef, useState} from 'react';

const AddForm = props => {
  const inputRef = useRef ();
  const selectRef = useRef ();
  return (
    <form
      className="add text-center my-4"
      onSubmit={e => {
        props.onAddItem (e, inputRef.current.value, selectRef.current.value);
        inputRef.current.value = '';
        selectRef.current.value = '';
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
        placeholder="add a new todo item"
        ref={inputRef}
      />
      <br />
      <select
        ref={selectRef}
        id="select"
        className="form-select"
        defaultValue=""
      >
        <option value="" disabled hidden>
          Select an option
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <br />
      <button type="submit" className="btn button-back btn-primary">
        Add
      </button>
    </form>
  );
};

export default AddForm;
