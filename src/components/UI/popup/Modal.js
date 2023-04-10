import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoContext } from '../Context/TodoProvider';

const Modal = () => {
/*
  const {editingTodo, open, handleUpdate} = useContext(TodoContext)

  const [add, setAdd] = useState('');

  const [todo, setTodo] = useState(editingTodo);
  const [isOpen, setIsOpen] = useState(false);

  //console.log("aaaaa ",props.editingTodo);
  
  useEffect( () => {
    console.log("aaaaa ",editingTodo);
    //setAdd(props.editingTodo.todo);
  }, [editingTodo]);


  const handleChange =(e) => {
    console.log("input v: ", e.target.value)
    const value = e.target.value;
    setAdd(value);
  }

  const navigate = useNavigate();

  if (!open) return null;
  return (
    <div className="todo-popup-container">
      <button onClick={handleUpdate}>Edit</button>
      {isOpen && (
        <div className="todo-popup">
          <h2>Update Todo</h2>
          <label>
            Title:
            <input type="text" name="title" value={editingTodo.todo} onChange={handleChange} />
          </label>
          <label>
            Description:
            <textarea name="description" value={todo.description} onChange={handleChange}></textarea>
          </label>
          <button onClick={handleUpdate}>Update</button>
          <button>Cancel</button>
        </div>
      )}
    </div>
  );
      */};
export default Modal;