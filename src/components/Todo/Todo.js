import FormAdd from "./FormAdd";
import React, { useState, useRef,useContext, useEffect } from "react";

import "./Todo.css";
import TodoItem2 from "./TodoItem2";
import ExampleContext from "../context/context";

const generateId = () => Math.floor(Math.random() * 1000);

function Todo() {
  const [init, setInitItems] = useState([
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
  ]);
  let ctx = useContext(ExampleContext);
  const array=ctx.myVar;
  const [todoItems, setTodoItems]=useState(array);
  /*const [todoItems, setTodoItems] = useState([
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
  ]);*/
  
  /*const treetodoItems=(id) =>{
    for (let i = 0; i < todoItems.length; i++) {
      
      if (todoItems[i].todo == todo) {
        return true
      }
   } 
  }*/

  useEffect(() => {
    setTodoItems(todoItems.sort((a, b) => a.complete - b.complete));
  }, [todoItems]);

  const completeTodoItem = (id) => {
      const newTodoItems = todoItems.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item
      );

      /*let index=-1;
      for (let i = 0; i < newTodoItems.length; i++) {
        
        if (newTodoItems[i].id == id) {
          index=i;
          break;
        }
      }
      //permetation
      
      let itempermetation;
      for (let j = newTodoItems.length-1 ; j >= index; j--) {
        
        if (newTodoItems[j].complete == false) {
          itempermetation=newTodoItems[index]
          newTodoItems[index]=newTodoItems[j]
          newTodoItems[j]=itempermetation
          break;
        }
      }*/
      newTodoItems.sort((a, b) => a.complete - b.complete
     
      );
    
      setTodoItems(newTodoItems);
  };

  const [itemSearch, setItem] = useState("");
  const searchTodoItem = (e) => {
    setItem(e.target.value);
    setTodoItems(todoItems.filter((item) => item.todo.includes(itemSearch)));
    if (e.target.value === "") {
      setTodoItems(init);
    }
  };

  const getItem=(todo) =>{
    
    for (let i = 0; i < todoItems.length; i++) {
      
        if (todoItems[i].todo == todo) {
          return true
        }
    } 
    return false
  }

  const getTodoChecked=() =>{
    let somme=0;
    for (let i = 0; i < todoItems.length; i++) {
      
        if (todoItems[i].complete == true) {
          somme=somme+1;
        }
    } 
    return somme;
  }

  const deleteTodoItem = (id) => {
    setTodoItems(todoItems.filter((item) => item.id !== id));
  };

  const addTodoItem = (item) => {
    if (item.trim() !== "" && getItem(item) === false) {
      const newItem = {
        id: generateId(),
        todo: item,
        complete: false,
      };
      todoItems.sort((a, b) => a.complete - b.complete
     
      );

      setTodoItems([...todoItems, newItem]);
    }
    else{
      alert("Please enter your value not existe in the list")
    }
  };

  const updateTodoItem = (id, newValue) => {
    const newArray = todoItems.map((item) => {
      if (item.id === id) {
        return { ...item, todo: newValue };
      } else {
        return item;
      }
    });
    setTodoItems(newArray);
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
              onChange={searchTodoItem}
            />
          </header>
          {todoItems.map((i) => (
           
            <TodoItem2
              key={i.id}
              item={i}
              completeTodoItem={completeTodoItem}
              deleteTodoItem={deleteTodoItem}
              updateTodoItem={updateTodoItem}
            />
            
          ))}
          <p className="totoChecked">Todo checked : {todoItems.filter((item) => item.complete).length}/{todoItems.length}</p>
          <FormAdd addTodoItem={addTodoItem} />         
     </>
    
  );
}
export default Todo;
