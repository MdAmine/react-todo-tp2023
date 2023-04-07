import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faPenToSquare,
  faTrashAlt,
  faCalendarXmark,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

const TodoItem = props => {
  return (
    <ul className="list-group todos mx-auto text-light">
      <li
        className={`list-group-item d-flex justify-content-between align-items-center ${props.item.complete ? 'item-complete myClass classita' : ''}`}
      >
        <span>{props.item.todo}</span>
        <div>
          {props.item.complete
            ? <FontAwesomeIcon
                icon={faCalendarXmark}
                onClick={() => props.onTodoItemComplete (props.item.id)}
              />
            : <FontAwesomeIcon
                style={{
                  marginRight: '0.3em',
                }}
                icon={faCheck}
                className="pointer"
                onClick={() => props.onTodoItemComplete (props.item.id)}
              />}
          <FontAwesomeIcon
            icon={faEye}
            onClick={() => props.onTodoDetailsClicked (props.item.id)}
          />
          <FontAwesomeIcon
            style={{
              marginRight: '0.3em',
            }}
            icon={faPenToSquare}
            onClick={() => props.onTodoItemUpdated (props.item)}
            className="pointer"
          />
          <FontAwesomeIcon
            icon={faTrashAlt}
            onClick={() => props.onTodoItemDeleted (props.item.id)}
            className="pointer"
          />
        </div>
      </li>
    </ul>
  );
};

export default TodoItem;
