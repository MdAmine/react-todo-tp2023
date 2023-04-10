import React, {useState} from 'react';
import './Todo.css';
import {useNavigate} from 'react-router-dom';
import TodoItem from './TodoItem';
import AddForm from './AddForm';
import TodoContext from '../Context/context';
import {useContext} from 'react';

const Todo = () => {
  const navigate = useNavigate ();
  let context = useContext (TodoContext);
  const generateId = () => Math.floor (Math.random () * 1000);
  const [searchValue, setSearchValue] = useState ('');
  const [todoItemsCopy, setTodoItemsCopy] = useState (context.items);

  const onTodoItemComplete = id => {
    let newTodoItems = context.items.map (
      item => (item.id === id ? {...item, complete: !item.complete} : item)
    );
    context.setItems (newTodoItems);
    setTodoItemsCopy (newTodoItems);
  };
  const onTodoItemDeleted = id => {
    let newTodoItems = context.items.filter (item => item.id !== id);
    context.setItems (newTodoItems);
  };
  const onSearch = e => {
    e.preventDefault ();
    const {value} = e.target;
    setSearchValue (value);
    context.setItems (search => {
      return value
        ? todoItemsCopy.filter (item =>
            item.todo.toLowerCase ().includes (value.toLowerCase ())
          )
        : todoItemsCopy;
    });
  };
  const onTodoItemUpdated = item => {
    const userInput = prompt ('Update this todo Item :', item.todo);
    const priority$ = prompt ('choose the priority : ', item.priority);
    let newTodoItems = [];
    if (userInput) {
      newTodoItems = context.items.map (
        i =>
          i === item
            ? {
                ...i,
                todo: userInput,
                updatedAt: new Date (),
                priority: +priority$,
              }
            : i
      );
    }
    context.setItems (newTodoItems);
  };
  const onAddItem = (e, item, priority$) => {
    e.preventDefault ();
    let newTodoItems = [
      {
        id: generateId (),
        todo: item,
        complete: false,
        createdAt: new Date (),
        updatedAt: new Date (),
        priority: +priority$,
      },
      ...context.items,
    ];
    context.setItems (newTodoItems);
    setTodoItemsCopy (newTodoItems);
  };
  const onTodoDetailsClicked = id => {
    navigate (`/details/${id}`);
  };
  const filterPriority = p => {
    let newTodoItems = todoItemsCopy.filter (item => item.priority === p);
    context.setItems (newTodoItems);
  };

  return (
    <div>
      <header className="text-center text-light my-4">
        <h1 className="mb-5">Todo List</h1>
        <input
          type="text"
          className="form-control m-auto"
          name="search"
          value={searchValue}
          onChange={onSearch}
          placeholder="search todos"
        />
        <br />
        <button
          type="button"
          onClick={() => filterPriority (1)}
          className="btn btn-danger"
        >
          Priority 1
        </button>
        <button
          type="button"
          onClick={() => filterPriority (2)}
          className="btn btn-primary"
        >
          priority 2
        </button>
        <button
          type="button"
          onClick={() => filterPriority (3)}
          className="btn btn-success"
        >
          Priority 3
        </button>
        <button
          type="button"
          onClick={() => filterPriority (4)}
          className="btn btn-warning"
        >
          Priority 4
        </button>

      </header>
      {context.items.map (item => {
        return (
          <TodoItem
            key={item.id}
            onTodoItemComplete={onTodoItemComplete}
            onTodoItemDeleted={onTodoItemDeleted}
            onTodoItemUpdated={onTodoItemUpdated}
            onTodoDetailsClicked={onTodoDetailsClicked}
            item={item}
          />
        );
      })}
      <AddForm onAddItem={onAddItem} />
    </div>
  );
};

export default Todo;
