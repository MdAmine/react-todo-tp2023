import React, { useContext } from 'react';
import TodoItem from './todoItem.js';
import Modal from '../popup/Modal.js';
import FloatingButton from '../FloatingButton.js';
import { useNavigate } from 'react-router-dom';
import { TodoContext } from '../context/TodoProvider.js'
import './TodoList.scss'
import ModalWindow from '../popup/Modal.js';

function TodoList(props) {

  const { completeItems, handleDelete, handleUpdate,
    handleSubmit, searchText, handleSearchInputChange, filteredTodos,
    editingTodo, setOpenModal, openModal } = useContext(TodoContext)

    const navigate = useNavigate();
    return (
        <div className="container">
            <button onClick={() => navigate(-1)} style={{ position: 'absolute', top: 0, left: 0 }}
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
                <div className="todo-item">
                <TodoItem key={index}
                    todo={todo}
                    completeItems={completeItems}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate} />
                </div>
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
                    editingTodo={editingTodo} />
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
            <FloatingButton handleLogout={props.handleLogout} />
        </div>
    );
}
export default TodoList;  