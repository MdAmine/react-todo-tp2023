import React from 'react';
import {useContext} from 'react';
import {useParams} from 'react-router-dom';
import TodoContext from '../Context/context';
import FloatingButton from '../UI/FloatingButton';
import {useNavigate} from 'react-router-dom';

const Details = () => {
  const params = useParams ();
  let navigate = useNavigate ();
  let ctx = useContext (TodoContext);
  const item = ctx.items.find (item => item.id === parseInt (params.id));
  let yoo = item.complete;
  console.log (item);
  return (
    <div className="todo-item">
      <h1>{item.id}</h1>
      <h1>{item.todo}</h1>
      <h1>{item.complete + ''}</h1>
      <button className="button-back" onClick={() => navigate (-1)}>
        Back
      </button>
      <FloatingButton />
    </div>
  );
};

export default Details;
