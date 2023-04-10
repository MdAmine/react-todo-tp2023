import React, { createContext, useState } from 'react';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  
    const generateId = () => Math.floor(Math.random() * 1000);

    const [todoItems, setTodoItems] = useState([
        {
            id: generateId(),
            todo: "Read books",
            complete: false,
        },
        {
            id: generateId(),
            todo: "Journaling",
            complete: false,
        },
        {
            id: generateId(),
            todo: "Make Dinner",
            complete: false,
        },
        {
            id: generateId(),
            todo: "Push-ups",
            complete: false,
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
        const newTodo = { id: generateId(), todo: todo, complete: false }
        setTodoItems([...todoItems, newTodo]);
        event.target.add.value = '';
    }

    //edit
    //const [editingTodo, setEditingTodo] = useState({});
    let editingTodo = {}

    const handleUpdate = (item) => {
        setOpenModal(true);
        //setEditingTodo(item);
        editingTodo = item;
        console.log("edd ", editingTodo)
    }

    const handleClose = () => {
        //setEditingTodo(null);
    }

    const [openModal, setOpenModal] = useState(false);

    //search
    const [searchText, setSearchText] = useState('');
    function handleSearchInputChange(event) {
        setSearchText(event.target.value);
    }
    const filteredTodos = todoItems.filter((t) =>
        t.todo.toLowerCase().includes(searchText.toLowerCase())
    );

  return (
    <TodoContext.Provider value={{todoItems, completeItems, handleDelete, handleUpdate, handleClose,
        handleSubmit, searchText, handleSearchInputChange, filteredTodos, editingTodo, setOpenModal, openModal}}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
