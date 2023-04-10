import TodoItem from "./TodoItem";
import FormAdd from "./FormAdd";
import { useContext, useEffect, useRef, useState } from "react";
import MyContext from "../../contex";
import Detail from "../Detail/Detail";
const Todo = () => {
  const generateId = () => Math.floor(Math.random() * 1000);
  const [countComplted,setcountComplted]=useState()
  let ctx = useContext(MyContext);
  let todoItems=ctx.todoItems
  let setTodoItems=ctx.setTodoItems
  const [changedItems, setChangedItems] = useState(todoItems);
  
  useEffect(()=>{
    setChangedItems(todoItems);
    setcountComplted(todoItems.filter(item=>item.complete==true).length)
  },[todoItems])
  const completeTodoItem = (id) => {
    const newTodoItems = todoItems.map((item) =>
      item.id === id ? { ...item, complete: !item.complete } : item
    );
    setTodoItems(newTodoItems);
  };
  const deleteItem = (id) => {
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(newTodoItems);
    console.log(newTodoItems);
  };
  const addItem = (todo,priority) => {
    let newTodoItems = [...todoItems];
    newTodoItems.push({ id: generateId(), todo: todo, priority: priority, complete: false , createdAT : (new Date()).toString() });
    setTodoItems(newTodoItems);
    console.log(newTodoItems);
  };
  const updateItem = (id) => {
    let task = prompt(
      "Please enter your task",
      todoItems.find((item) => item.id === id).todo
    );
    if (task != null) {
      todoItems.find((item) => item.id === id).updatedAT = (new Date()).toString();
      todoItems.find((item) => item.id === id).todo = task;
      const newTodoItems = todoItems.map((item) =>
        item.id === id ? { ...item, todo: task } : item
      );
      setTodoItems(newTodoItems);
      console.log(newTodoItems);
    }
  };

  const searchRef = useRef();
  const changeItems = () => {
    setChangedItems(
      todoItems.filter((item) => item.todo.toLowerCase().includes(searchRef.current.value.toLowerCase()))
    );
  };
  return (
    <>
      <header className="text-center text-light my-4">
        <h1 className="mb-5">Todo List</h1>
        <input
          type="text"
          className="form-control m-auto"
          name="search"
          id="search"
          ref={searchRef}
          placeholder="search todos"
          onChange={changeItems}
        />
      </header>
      {changedItems.map((i) => (
        <TodoItem
          item={i}
          key={i.id}
          deleteItem={deleteItem}
          completeTodoItem={completeTodoItem}
          updateItem={updateItem}
        />
      ))}
      <h6 className="text-center text-light my-4">Task completed : {countComplted}</h6>
      <FormAdd addItem={addItem} />
    </>
  );
};
export default Todo;
