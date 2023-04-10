import { useState } from "react";
import TodoItem from "./TodoItem";
import FormAdd from "./FormAdd";

function Todo() {
  const [item, setItem] = useState("");
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

  // selection
  const completeTodoItem = (id) => {
    const newTodoItems = todoItems.map((item) =>
      item.id === id ? { ...item, complete: !item.complete } : item
    );
    setTodoItems(newTodoItems);
  };

  // suppression
  const deleteItem = (id) => {
    const deletedItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(deletedItems);
  };

  // modification
  const updateItem = (id) => {
    const result = prompt("enter the new value");
    if (result !== null) {
      console.log("User entered: " + result);
      const updateItems = todoItems.map((item) =>
        item.id === id ? { ...item, todo: result } : item
      );
      setTodoItems(updateItems);
    }
  };

  // recherche
  const [copieTodoItems, setCopieTodoItem] = useState(todoItems);
  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    const searchedItem = searchTerm
      ? copieTodoItems.filter((item) =>
          item.todo.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : copieTodoItems;
    setTodoItems(searchedItem);
  };

  //ajout
  const addItem = (e) => {
    e.preventDefault();
    if (item.trim() !== "") {
      const newItem = {
        id: generateId(),
        todo: item,
        complete: false,
      };
      setTodoItems([...todoItems, newItem]);
      setItem("");
    }
  };
  return (
    <div className="container">
      <header className="text-center text-light my-4">
        <h1 className="mb-5">Todo List</h1>
        <input
          type="text"
          className="form-control m-auto"
          name="search"
          placeholder="search todos"
          onChange={handleInputChange}
        />
      </header>
      {todoItems.map((i) => (
        <TodoItem
          key={i.id}
          item={i}
          completeTodoItem={completeTodoItem}
          deleteItem={deleteItem}
          updateItem={updateItem}
        />
      ))}

      <FormAdd item={item} setItem={setItem} addItem={addItem}/>
    </div>
  );
}

export default Todo;
