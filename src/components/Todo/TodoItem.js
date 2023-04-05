import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faPenToSquare,
  faTrashAlt,
  faCalendarXmark,
} from '@fortawesome/free-solid-svg-icons';

const TodoItem = props => {
  return (
    <ul className="list-group todos mx-auto text-light">
      <li
        className={`list-group-item d-flex justify-content-between align-items-center ${props.item.complete ? 'item-complete' : ''}`}
      >
        <span>{props.item.todo}</span>
        <div>
          {props.item.complete
            ? <FontAwesomeIcon icon={faCalendarXmark} />
            : <FontAwesomeIcon
                style={{
                  marginRight: '0.3em',
                }}
                icon={faCheck}
                className="pointer"
                onClick={() => props.onTodoItemComplete (props.item.id)}
              />}

          <FontAwesomeIcon
            style={{
              marginRight: '0.3em',
            }}
            icon={faPenToSquare}
            className="pointer"
          />
          <FontAwesomeIcon icon={faTrashAlt} className="pointer" />
        </div>
      </li>
    </ul>
  );
};

export default TodoItem;
