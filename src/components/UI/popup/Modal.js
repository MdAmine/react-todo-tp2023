import React, { useEffect, useState } from 'react';
import images from './image.jpg'
import { useNavigate } from 'react-router-dom';

const Modal = (props ) => {

  const [add, setAdd] = useState('');

  const [todo, setTodo] = useState(props.editingTodo);
  const [isOpen, setIsOpen] = useState(false);

  //console.log("aaaaa ",props.editingTodo);
  
  useEffect( () => {
    console.log("aaaaa ",props.editingTodo);
    //setAdd(props.editingTodo.todo);
  }, [props.editingTodo]);


  const handleChange =(e) => {
    console.log("input v: ", e.target.value)
    const value = e.target.value;
    setAdd(value);
  }

  const navigate = useNavigate();

  if (!props.open) return null;
  return (
    <div onClick={props.onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <div className='modalRight'>
          <p className='closeBtn' onClick={props.onClose}>
            X
          </p>
          <div className='content'>
          <form className="add text-center my-4" >
                <label htmlFor="add" className="add text-light">
                    Add a new todo:
                </label>
                <input
                    type="text"
                    className="form-control m-auto"
                    name="add"
                    id="add"
                    value={todo.todo}
                    onChange={(e) => handleChange(e)}
                />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;