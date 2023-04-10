import React, {useState, useEffect} from 'react';

const TodoTable = () => {
  const [todos, setTodos] = useState ([]);

  useEffect (() => {
    fetch ('https://jsonplaceholder.typicode.com/todos/')
      .then (response => response.json ())
      .then (data => setTodos (data))
      .catch (error => console.error ('Error fetching todos:', error));
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      <table className="todo-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map (todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoTable;
