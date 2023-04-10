import { useState } from "react";

const UpdateTodoItem = ({ todo, handleUpdateTodoItem }) => {
    const [updatedTodo, setUpdatedTodo] = useState(todo);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUpdatedTodo((prevState) => ({ ...prevState, [name]: value }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        handleUpdateTodoItem(updatedTodo);
      };
      
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Todo:
        <input
          type="text"
          name="todo"
          value={updatedTodo.todo}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Complete:
        <input
          type="checkbox"
          name="complete"
          checked={updatedTodo.complete}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Priority:
        <select
          name="priority"
          value={updatedTodo.priority}
          onChange={handleInputChange}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <button type="submit">Update TodoItem</button>
    </form>
  );
}
export default UpdateTodoItem;