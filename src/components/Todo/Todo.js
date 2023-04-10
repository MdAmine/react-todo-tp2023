import {useContext, useEffect, useState} from "react";
import "./Todo.css";
import TodoAdd from "./TodoAdd";
import TodoItem from "./TodoItem";
import TodoItemContext from "../../contexts/TodoItemContext";

const Todo = () => {
    let ctx = useContext(TodoItemContext);
    const generateId = () => Math.floor(Math.random() * 1000);

    const [searchValue, setSearchValue] = useState("");
    const [filteredTodos, setFilteredTodos] = useState(ctx.todoItems);

    const completeTodoItem = (id) => {
        const newTodoItems = ctx.todoItems.map((item) =>
            item.id === id ? {...item, complete: !item.complete} : item
        );
        ctx.setTodoItems(newTodoItems);
    };

    const deleteTodoItem = (id) => {
        ctx.setTodoItems(ctx.todoItems.filter((i) => i.id !== id));
    };

    const updateTodoItem = (item) => {
        const newTodoItems = ctx.todoItems.map((i) =>
            i.id === item.id ? {...i, todo: item.todo, updatedAt: new Date().toLocaleString()} : i
        );
        ctx.setTodoItems(newTodoItems);
    };

    useEffect(() => {
        const newFilteredTodos = ctx.todoItems;
        newFilteredTodos.sort((a, b) => a.complete - b.complete);
        newFilteredTodos.sort((a, b) => a.priority - b.priority);
        setFilteredTodos(newFilteredTodos);
    }, [ctx.todoItems]);

    useEffect(() => {
        searchItem(searchValue);
    }, [searchValue]);

    const searchItem = (value) => {
        const newFilteredTodos = ctx.todoItems.filter((item) =>
            item.todo.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredTodos(newFilteredTodos);
    }

    const addTodoItem = (todo, priority) => {
        const existingItem = filteredTodos.find((item) => item.todo === todo);
        if (existingItem) {
            alert("Item already exists!!");
            return;
        }
        const newTodoItem = {
            id: generateId(),
            todo,
            complete: false,
            priority: priority,
            createdAt: new Date().toLocaleString()
        };
        const newTodoItems = [...filteredTodos, newTodoItem];
        ctx.setTodoItems(newTodoItems);
    };

    const filterByPriority = (priority) => {
        if (priority === 0) {
            setFilteredTodos(ctx.todoItems);
            return;
        }
        const filteredTodos = ctx.todoItems.filter((item) => item.priority == priority);
        setFilteredTodos(filteredTodos);
    }

    return (
        <>
            <header className="text-center text-light my-4">
                <h1 className="mb-5">Todo List</h1>
                <input
                    type="text"
                    className="form-control m-auto"
                    name="search"
                    placeholder="search todos"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <div className="input-group mt-2">
                    <button onClick={() => filterByPriority(0)} className="form-control btn btn-dark btn-sm">All
                    </button>
                    <button onClick={() => filterByPriority(1)} className="form-control btn btn-danger btn-sm">P1
                    </button>
                    <button onClick={() => filterByPriority(2)} className="form-control btn btn-warning btn-sm">P2
                    </button>
                    <button onClick={() => filterByPriority(3)} className="form-control btn btn-primary btn-sm">P3
                    </button>
                    <button onClick={() => filterByPriority(4)} className="form-control btn btn-success btn-sm">P4
                    </button>
                </div>
            </header>

            {filteredTodos.map((i) => (
                <TodoItem
                    key={i.id}
                    item={i}
                    completeTodoItem={completeTodoItem}
                    deleteTodoItem={deleteTodoItem}
                    updateTodoItem={updateTodoItem}
                />
            ))}

            <div className="text-center text-light my-4">
                <h6>There is {filteredTodos.length} items</h6>
                <h6>
                    Completed:{" "}
                    {filteredTodos.reduce(
                        (count, item) => count + (item.complete ? 1 : 0),
                        0
                    )}
                    /{filteredTodos.length}
                </h6>
            </div>

            <TodoAdd addTodoItem={addTodoItem}/>
        </>
    );
};

export default Todo;
