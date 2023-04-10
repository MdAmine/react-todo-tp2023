import { useContext } from "react";
import { TodoContext } from "../Context/TodoProvider";
import './AddTodo.css'

const AddTodo = ({handleAdd}) => {

    return (
        <div>
        <form className="todo-form" onSubmit={handleAdd}>
                    <input type="text" name="todo" placeholder="Add a Todo" required />
                    <label>
                        Complete:
                        <input className="checkbox" type="checkbox" name="complete" />
                    </label>
                    <label>
                        Priority:
                        <select name="priority">
                            <option value="1">Low</option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
                        </select>
                    </label>
                    <button className="add-btn" type="submit">Add</button>
                </form>
        </div>
    );
}
export default AddTodo;