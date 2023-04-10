import React, { useEffect, useState } from "react";
import FloatingButton from "../UI/FloatingButton";

const About = ({ handleLogout }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <>
      <FloatingButton handleLogout={handleLogout} />
      <div>
        <h1>Todo List</h1>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <h2> Title :{todo.title}</h2>
              <p> Statu :{todo.completed ? "Completed" : "Incomplete"}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default About;
