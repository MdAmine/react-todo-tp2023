import React, {useContext, useEffect, useState} from "react";
import TodoItem from "./TodoItem";
import Context from "../contexte/Context";


function Todo() {
    const [filteredItems, setFilteredItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [newItemTodo, setNewItemTodo] = useState("");
    const [newItemPriority, setNewItemPriority] = useState(3);
    const [countCheckedList, setCountCheckedList] = useState(0)

    const {todoItems, setTodoItems} = useContext(Context);
    const completeTodoItem = (id) => {
        const newTodoItem = todoItems.map(
            (item) => item.id === id ? {...item, complete: !item.complete} : item
        );
        setTodoItems(newTodoItem)
        setCountCheckedList(todoItems.length)
    }

    const deleteItem = (id) => {
        const updatedItems = todoItems.filter(item => item.id !== id);
        setTodoItems(updatedItems);
    }
    const updateItem = (id) => {
        const itemToUpdate = todoItems.find(item => item.id === id);
        console.log(itemToUpdate)
        const updatedText = prompt("Enter new Todo:", itemToUpdate.todo);
        const updatedPriority = prompt("Change Priority:", itemToUpdate.priority);
        if (updatedText !== null && updatedText !== "") {
            const updatedItems = todoItems.map(item => {
                if (item.id === id) {
                    const dateItemUpdate = new Date().getTime();
                    return {...item, todo: updatedText,updateAT:dateItemUpdate,priority :+updatedPriority};
                }
                return item;
            });
            setTodoItems(updatedItems);
        }
    }

    useEffect(() => {
            const result = todoItems.filter(item => item.todo.toLowerCase().includes(searchTerm.toLowerCase()));
            setFilteredItems(result);
        },
        [todoItems,searchTerm]
    );

    function addItem(event) {
        event.preventDefault();
        const newId = todoItems.length + 1;
        const dateItem = new Date().getTime();
        const newItem = {id: newId, todo: newItemTodo, createAT:dateItem, complete:false,priority:+newItemPriority};
        setTodoItems([...todoItems, newItem]);
        setNewItemTodo("");
        console.log(newItem)
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
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </header>

            {filteredItems.map(
                (i) => <TodoItem
                    key={i.id}
                    item={i}
                    completeTodoItem={completeTodoItem}
                    deleteItem={deleteItem}
                    updateItem={updateItem}
                />
            )}
            <p style={{color:'white',fontSize:'10px'}}>TODO Size :{todoItems.length}</p>

            <form className="add text-center my-4" onSubmit={addItem}>
                <label htmlFor="add" className="add text-light">
                    Add a new todo:
                </label>

                <input
                    type="text"
                    value={newItemPriority}
                    onChange={(e) => setNewItemPriority(e.target.value)}
                    min="1"
                    max ="3"
                />
                <input
                    type="text"
                    className="form-control m-auto"
                    name="add"
                    id="add"
                    value={newItemTodo}
                    onChange={(e) => setNewItemTodo(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            addItem(e);
                        }}}
                />

            </form>

        </>
    )
}

export default Todo;