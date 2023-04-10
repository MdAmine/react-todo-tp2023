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
  const formatedDate = date => {
    var year = date.getFullYear ();
    var month = ('0' + (date.getMonth () + 1)).slice (-2);
    var day = ('0' + date.getDate ()).slice (-2);
    var hours = ('0' + date.getHours ()).slice (-2);
    var minutes = ('0' + date.getMinutes ()).slice (-2);
    var formattedDate$ =
      year + '-' + day + '-' + month + ' ' + hours + ':' + minutes;

    return formattedDate$;
  };
  return (
    <div className="todo-item">
      <h2>{item.id}</h2>
      <h2>{item.todo}</h2>
      <h2>{item.complete + ''}</h2>
      <h2>Updated At : {formatedDate (item.createdAt)}</h2>
      <h2>Created At : {formatedDate (item.updatedAt)}</h2>
      <button className="button-back" onClick={() => navigate (-1)}>
        Back
      </button>
      <FloatingButton />
    </div>
  );
};

export default Details;
