import React, {useState} from "react";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";


const Todo = () => {
const generateId = () => Math.floor(Math.random() * 1000);
let [todoItems,setTodoItems] = useState([
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
const completeTodoItem=(id)=>{
const newTodoItem=todoItems.map(
(item)=> item.id=== id ? {...item,complete: !item.complete} :item
);
setTodoItems(newTodoItem)
}

const deleteItem=(id)=>{
const updatedItems = todoItems.filter(item => item.id !== id);
setTodoItems(updatedItems);
}
return (
<>
    {todoItems.map(
    (i)=>
    <TodoItems key={i.id} item={i} completeTodoItem={completeTodoItem} deleteItem={deleteItem} />
    )}

    <AddTodo />
</>
)
}

export default Todo
