import React, { createContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {

  const navigate = useNavigate();
  
    const generateId = () => Math.floor(Math.random() * 1000);

    const [todoItems, setTodoItems] = useState([
        {
            id: generateId(),
            todo: "Read books",
            complete: false,
            priority: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: generateId(),
            todo: "Journaling",
            complete: false,
            priority: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: generateId(),
            todo: "Make Dinner",
            complete: false,
            priority: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: generateId(),
            todo: "Push-ups",
            complete: false,
            priority: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ]);

    const completeItems = (id) => {
        const newTodoItems = todoItems.map((item) =>
          item.id === id ? { ...item, complete: !item.complete } : item
        );
        
        // Sort the todo items based on the 'complete' property
        const sortedTodoItems = newTodoItems.sort((a, b) => {
          if (a.complete && !b.complete) {
            return 1;
          } else if (!a.complete && b.complete) {
            return -1;
          } else {
            return 0;
          }
        });
      
        setTodoItems(sortedTodoItems);
      };
      

    const handleDelete = (id) => {
        const newTodos = todoItems.filter(todo => todo.id !== id);
        setTodoItems(newTodos);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const todo = event.target.add.value;
        const newTodo = { id: generateId(), todo: todo, complete: false, priority: Number, createdAt: new Date(), updatedAt: new Date() }
        setTodoItems([...todoItems, newTodo]);
        event.target.add.value = '';
    }

    //search
    const [searchText, setSearchText] = useState('');
    function handleSearchInputChange(event) {
        setSearchText(event.target.value);
    }
    const filteredTodos = todoItems.filter((t) =>
        t.todo.toLowerCase().includes(searchText.toLowerCase())
    );

    //update
    const handleUpdateTodoItem = (updatedTodoItem) => {
      navigate("/updateTodo");
      setTodoItems((prevState) =>
        prevState.map((todoItem) =>
          todoItem.id === updatedTodoItem.id ? { ...updatedTodoItem } : todoItem
        )
      );
    };

    const handleAdd = (event) => {
      event.preventDefault();
  
      const form = event.target;
      const id = Date.now();
      const todo = form.todo.value;
      const complete = !form.complete.checked;
      const priority = form.priority.value;
      console.log(form.priority.value)
      const createdAt = new Date().toISOString();
      const updatedAt = new Date().toISOString();
  
      setTodoItems([
        ...todoItems,
        { id, todo, complete, priority, createdAt, updatedAt }
      ]);
  
      form.reset();
    };

    const [priorityFilter, setPriorityFilter] = useState("");

    const handlePriorityFilterChange = (event) => {
        setPriorityFilter(parseInt(event.target.value));
    };

    const filteredTodoList = priorityFilter
        ? todoItems.filter((todoItem) => todoItem.priority === priorityFilter)
        : todoItems;

  return (
    <TodoContext.Provider value={{filteredTodoList, handlePriorityFilterChange, priorityFilter, 
      setPriorityFilter, todoItems, completeItems, handleDelete, handleSubmit, searchText, 
      handleSearchInputChange, filteredTodos,  handleAdd, handleUpdateTodoItem }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
