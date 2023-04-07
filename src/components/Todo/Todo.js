import React, {useEffect, useState} from 'react';
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
    let newTodoItems = [];
    if (userInput) {
      newTodoItems = context.items.map (
        i => (i === item ? {...i, todo: userInput} : i)
      );
    }
    context.setItems (newTodoItems);
  };
  const onAddItem = (e, item) => {
    e.preventDefault ();
    let newTodoItems = [
      ...context.items,
      {
        id: generateId (),
        todo: item,
        complete: false,
      },
    ];
    context.setItems (newTodoItems);
  };
  const onTodoDetailsClicked = id => {
    navigate (`/details/${id}`);
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
