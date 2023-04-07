import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faPenToSquare,
    faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import TodoItem from './todoItem.js';
import Modal from '../popup/Modal.js';
import FloatingButton from '../FloatingButton.js';
import { useNavigate } from 'react-router-dom';

function TodoList(props) {

    const navigate = useNavigate();


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
        const newCompleteItems = todoItems.map((item) =>
            item.id === id ? { ...item, complete: !item.complete } : item
        );
        setTodoItems(newCompleteItems);
        console.log(newCompleteItems)
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
        console.log("edd ",editingTodo)
    }

    {/*const handleEdit = (add) => {
        console.log("edd ",editingTodo)
        const newTodos = [...todoItems];
        const newTodo = todoItems.filter(i => i.id === editingTodo.id);
        const newTodoo = {id: editingTodo.id, todo: add, complete:editingTodo.id};
        //setEditingTodo(newTodoo)
        console.log("newtodo ", newTodo)
        console.log("add ",add)
    }*/}

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
        <div className="container">
            <button  onClick={() => navigate(-1)} style={{ position: 'absolute', top: 0, left: 0 }}
>Go Back</button>
            <header className="text-center text-light my-4">
                <h1 className="mb-5">Todo List</h1>
                <input
                    type="text"
                    className="form-control m-auto"
                    name="search"
                    placeholder="search todos"
                    onChange={handleSearchInputChange}
                    value={searchText}
                />
            </header>

            {filteredTodos.map((todo, index) => (
                <TodoItem key={index}
                    todo={todo}
                    completeItems={completeItems}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate} />
            ))}
            {/*todoItems.map((todo) =>
                <TodoItem key={todo.id}
                    todo={todo}
                    completeItems={completeItems}
                    handleDelete={handleDelete}
                    setOpenModal={setOpenModal}
                    setEditingTodo={setEditingTodo} />
            )*/}

            {openModal &&
            <Modal open={openModal}
                onClose={() => setOpenModal(false)} 
                editingTodo={editingTodo}/>
            }

            <form className="add text-center my-4" onSubmit={handleSubmit}>
                <label htmlFor="add" className="add text-light">
                    Add a new todo:
                </label>
                <input
                    type="text"
                    className="form-control m-auto"
                    name="add"
                    id="add"
                />
            </form>
            <FloatingButton handleLogout={props.handleLogout}/>
        </div>
    );
}
export default TodoList;  