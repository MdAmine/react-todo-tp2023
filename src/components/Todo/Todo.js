
import FormAdd from "./FormAdd";
import React, { useState } from "react";

import "./Todo.css";
import TodoItem2 from "./TodoItem2";

const generateId = () => Math.floor(Math.random() * 1000);
 
function Todo() {
     
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
      ]);

    const completeTodoItem = (id) =>{
       const newTodoItems=todoItems.map((item) =>
         item.id === id ? {...item, complete: !item.complete} :item       
       );
       setTodoItems(newTodoItems);
    };

    const deleteTodoItem = (id) =>{
      /*const newTodoItems=todoItems.map((item) =>
        item.id === id ? {...item, complete: !item.complete} :item       
      );*/
      setTodoItems(todoItems.filter(item => item.id !== id));
      
   };

    return (
       <> 
          <header className="text-center text-light my-4">
            <h1 className="mb-5">Todo List</h1>
            <input
              type="text"
              className="form-control m-auto"
              name="search"
              placeholder="search todos"
            />
          </header>
          {todoItems.map((i) => (
              <TodoItem2 key={i.id} item={i} completeTodoItem={completeTodoItem} deleteTodoItem={deleteTodoItem}/>     
          ))}
        
          <FormAdd />
        </>

        
    );
}
export default Todo;
