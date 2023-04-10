import FormAdd from "./FormAdd";
import React, { useState, useRef, useContext, useEffect } from "react";

import "./Todo.css";
import TodoItem2 from "./TodoItem2";
import ExampleContext from "../context/context";
import BackButton from "../UI/BackButton";

const generateId = () => Math.floor(Math.random() * 1000);

function Todo() {
  /*const [init, setInitItems] = useState([
    {
      id: 1,
      todo: "Read books",
      complete: false,
    },
    {
      id: 2,
      todo: "Journaling",
      complete: false,
    },
    {
      id: 3,
      todo: "Make Dinner",
      complete: false,
    },
    {
      id: 4,
      todo: "Push-ups",
      complete: false,
    },
  ]);*/
  let ctx = useContext(ExampleContext);
  const [init, setInitItems] = useState(ctx.todoItems);
  //const array=ctx.myVar;
  //const [todoItems, setTodoItems]=useState(ctx.todoItems);

  useEffect(() => {
    //console.log(todoItems)
    ctx.todoItems.sort((a, b) => a.complete - b.complete);
    //console.log(todoItems)

    ctx.setTodoItems(ctx.todoItems);
    console.log(ctx.todoItems);
  }, [ctx.todoItems]);

  const completeTodoItem = (id) => {
    const newTodoItems = ctx.todoItems.map((item) =>
      item.id === id ? { ...item, complete: !item.complete } : item
    );

    newTodoItems.sort((a, b) => a.complete - b.complete);

    ctx.setTodoItems(newTodoItems);
  };

  const filterTodoItem = (priority) => {
    ctx.setTodoItems(init);
    if (priority !=0) {
      ctx.setTodoItems(
        ctx.todoItems.filter((item) => item.priority == priority)
      );
    }
    else{
      ctx.setTodoItems(init);
    }
    
  }

  const [itemSearch, setItem] = useState("");
  const searchTodoItem = (e) => {
    setItem(e.target.value);
    ctx.setTodoItems(
      ctx.todoItems.filter((item) => item.todo.includes(itemSearch))
    );
    if (e.target.value === "") {
      ctx.setTodoItems(init);
    }
  };

  const getItem = (todo) => {
    for (let i = 0; i < ctx.todoItems.length; i++) {
      if (ctx.todoItems[i].todo == todo) {
        return true;
      }
    }
    return false;
  };

  const getTodoChecked = () => {
    let somme = 0;
    for (let i = 0; i < ctx.todoItems.length; i++) {
      if (ctx.todoItems[i].complete == true) {
        somme = somme + 1;
      }
    }
    return somme;
  };

  const deleteTodoItem = (id) => {
    ctx.setTodoItems(ctx.todoItems.filter((item) => item.id !== id));
  };

  const addTodoItem = (item,radioValue) => {
    if (item.trim() !== "" && getItem(item) === false) {
      const date = new Date();
      const formattedDate = date.toLocaleString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      });
      const newItem = {
        id: generateId(),
        todo: item,
        complete: false,
        priority : Number(radioValue),
        createdAt: formattedDate,
        updatedAt: ""
      };
      /*todoItems.sort((a, b) => a.complete - b.complete
     
      );*/
      //ctx.todoItems.push(item)
      ctx.setTodoItems([newItem, ...ctx.todoItems]);
    } else {
      alert("Please enter your value not existe in the list");
    }
  };

  const updateTodoItem = (id, newValue) => {
    /*const current = new Date();
    const dateUpdate=current.getDate()+"/"+(current.getMonth()+1)+"/"+current.getFullYear()*/
    const date = new Date();
    const formattedDate = date.toLocaleString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    });
    const newArray = ctx.todoItems.map((item) => {
      if (item.id === id) {
        return { ...item, todo: newValue,updatedAt:formattedDate };
      } else {
        return item;
      }
    });
    ctx.setTodoItems(newArray);
  };

  return (
    <>
      {" "}
      <div className="contentTodo">
        <header className="text-center text-light my-4">
          <h1 className="mb-5">Todo List</h1>
          <input
            type="text"
            className="form-control m-auto"
            name="search"
            placeholder="search todos"
            onChange={searchTodoItem}
          />
           <label  className="priority text-light">
             Filter By Priority : 
            </label>
          <span className="badge bg-info text-dark" onClick={() => filterTodoItem(0)}>All</span>
          <span className="badge bg-primary" onClick={() => filterTodoItem(1)}>1</span>
          <span className="badge bg-secondary" onClick={() => filterTodoItem(2)}>2</span> 
          <span className="badge bg-success" onClick={() => filterTodoItem(3)}>3</span>
          <span className="badge bg-danger" onClick={() => filterTodoItem(4)}>4</span> 
        </header>
        {ctx.todoItems.map((i) => (
          <TodoItem2
            key={i.id}
            item={i}
            completeTodoItem={completeTodoItem}
            deleteTodoItem={deleteTodoItem}
            updateTodoItem={updateTodoItem}
          />
        ))}
        <p className="totoChecked">
          Todo checked : {ctx.todoItems.filter((item) => item.complete).length}/
          {ctx.todoItems.length}
        </p>
         <FormAdd addTodoItem={addTodoItem} />
      </div>
      
    </>
  );
}
export default Todo;
