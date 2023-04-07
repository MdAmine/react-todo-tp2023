import React, {useRef} from 'react';

const AddForm = props => {
  const inputRef = useRef ();
  return (
    <form
      className="add text-center my-4"
      onSubmit={e => {
        props.onAddItem(e, inputRef.current.value);
        inputRef.current.value = '';
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
    </form>
  );
};

export default AddForm;
