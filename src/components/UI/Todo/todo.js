import React, { Children, createContext, useContext } from 'react';
import TodoItem from './TodoItem.js';
import Modal from '../popup/Modal.js';
import FloatingButton from '../FloatingButton.js';
import { Navigate, useNavigate } from 'react-router-dom';
import { TodoContext } from '../Context/TodoProvider.js'
import './TodoList.scss'
import { LoginContext } from '../Context/LoginProvider.js';
import AddTodo from './AddTodo.js';

const TodoContextt = createContext();

function TodoList({ children }) {

    const  { priorityFilter, filteredTodoList, handlePriorityFilterChange, completeItems, handleDelete, handleUpdate,
        handleSubmit, searchText, handleSearchInputChange, filteredTodos,
        handleLogout, handleAdd, handleUpdateTodoItem
    } = useContext(TodoContext)

    const navigate = useNavigate();

    const { isLoggedIn } = useContext(LoginContext);

    if (!isLoggedIn) {
        return <Navigate to="/login" />
    }



    return (
        <>
            <div className="container">
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

                <label>
                    Filter by Priority:
                    <select value={priorityFilter} onChange={handlePriorityFilterChange}>
                        <option value="">All</option>
                        <option value="1">Low</option>
                        <option value="2">Medium</option>
                        <option value="3">High</option>
                    </select>
                </label>
                <ul>
                    {filteredTodoList.map((todoItem) => (
                        <TodoItem key={todoItem.id} todo={todoItem} />
                    ))}
                </ul>

                {filteredTodos.map((todo, index) => (
                    <div className="todo-item">
                        <TodoItem key={index}
                            todo={todo}
                            completeItems={completeItems}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                            handleUpdateTodoItem={handleUpdateTodoItem} />
                    </div>
                ))}

                

                <AddTodo handleAdd={handleAdd} />

                <FloatingButton handleLogout={handleLogout} />
            </div>

            <TodoContext.Provider>
                {children}
            </TodoContext.Provider>
        </>
    );
}
export { TodoList, TodoContextt };  
