import { useContext, useState } from "react";
import TodoItem from "./TodoItem";
import Form from "../Form/Form";
import FloatingButton from "../UI/FloatingButton";
import { useNavigate } from "react-router-dom";
import TodoContext from "../../context/todoContext";

const Todo = () => {
  const generateId = () => Math.floor(Math.random() * 1000);
  const [newTodo, setNewTodo] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  let navigate = useNavigate();
  const context = useContext(TodoContext);
  // const [todoItems, setTodoItems] = useState([
  //   {
  //     id: generateId(),
  //     todo: "Read books",
  //     complete: false,
  //   },
  //   {
  //     id: generateId(),
  //     todo: "Journaling",
  //     complete: false,
  //   },
  //   {
  //     id: generateId(),
  //     todo: "Make Dinner",
  //     complete: false,
  //   },
  //   {
  //     id: generateId(),
  //     todo: "Push-ups",
  //     complete: false,
  //   },
  // ]);
  const updateCompleteItems = (id) => {
    const newTodoItems = context.todoItems.map((item) => {
      if (item.id === id) {
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    context.setTodoItems(newTodoItems);
  };
  const deleteTodoItem = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cet élément ?")) {
      const newTodoItems = context.todoItems.filter((item) => item.id !== id);
      context.setTodoItems(newTodoItems);
    }
  };
  const editTodoItem = (id, todo) => {
    const newTodo = prompt("enter new todo :", todo);
    if (newTodo !== null) {
      const newTodoItems = context.todoItems.map((item) => {
        if (item.id === id) {
          return { ...item, todo: newTodo };
        }
        return item;
      });
      context.setTodoItems(newTodoItems);
    }
  };
  const addTodoItem = (e) => {
    e.preventDefault();
    const newTodoItem = {
      id: generateId(),
      todo: newTodo,
      complete: false,
    };
    context.setTodoItems([...context.todoItems, newTodoItem]);
    setNewTodo("");
  };
  const viewDetailsItem = (id) => {
    context.todoItems.map((item) => {
      if (item.id === id) {
        navigate(`/details/${id}`);
      }
    });
  };
  const filteredTodoItems = context.todoItems.filter((item) =>
    item.todo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <header className="text-center text-light my-4">
        <h1 className="mb-5">Todo List</h1>
        <button className="btn" onClick={() => navigate(1)}>
          Next
        </button>
        <input
          type="text"
          className="form-control m-auto"
          name="search"
          placeholder="search todos"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </header>
      {filteredTodoItems.map((item) => (
        <TodoItem
          todoItem={item}
          updateCompleteItems={updateCompleteItems}
          key={item.id}
          deleteItems={deleteTodoItem}
          editItems={editTodoItem}
          viewItems={viewDetailsItem}
        />
      ))}
      <Form
        addItem={addTodoItem}
        newTodoItem={newTodo}
        setNewTodoItem={setNewTodo}
      />
      <FloatingButton />
    </>
  );
};
export default Todo;
