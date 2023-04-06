import React, {useEffect, useState} from "react";
import "./Todo.css"
import TodoItem from "./TodoItem";
import FormAdd from "./FormAdd";

function Todo() {
    const generateId = () => Math.floor(Math.random() * 1000);






    const [todoItems, setTodoItems] = useState(
        [
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
        ]
    )

    const [searchTerm, setSearchTerm] = useState("");

    const [filteredTodoItems, setFilteredTodoItems] = useState(todoItems);

     useEffect(() => {
        const filteredItems = todoItems.filter((item) =>
            item.todo.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredTodoItems(filteredItems);
    }, [todoItems, searchTerm]);


    const completeTodoItem = (id) => {
        const newTodoItems = todoItems.map((item) =>
            item.id === id ? {...item, complete: !item.complete} : item);
        setTodoItems(newTodoItems);
    }

    const deleteTodoItem = (id) => {
        const newTodoItems = todoItems.filter((item) => item.id !== id);
        setTodoItems(newTodoItems);
    };

    const updateTodoItem = (item) => {
        let itesmTodo = prompt("Please enter todo item", item.todo);

        if (itesmTodo != null) {

            const newTodoItems = todoItems.map((i) => i.id === item.id ? {...i, todo: itesmTodo} : i)
            setTodoItems(newTodoItems);
        }
    }
    const addItem = (newTodo) => {
        const newTodoItem = {
            id: generateId(),
            todo: newTodo,
            complete: false
        };
        setTodoItems([...todoItems, newTodoItem]);
    };


    return (
        <div>

            <header className="text-center text-light my-4">
                <h1 className="mb-5">Todo List</h1>
                <input
                    type="text"
                    className="form-control m-auto"
                    name="search"
                    placeholder="search todos"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

            </header>

            {filteredTodoItems.map((item) => (
                <TodoItem
                    key={item.id}
                    item={item}
                    completeTodo={completeTodoItem}
                    deleteItem={deleteTodoItem}
                    updateItem={updateTodoItem}
                />
            ))}

            <FormAdd add={addItem}/>

        </div>
    )
}

export default Todo;