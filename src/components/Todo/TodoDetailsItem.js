import { useNavigate, useParams } from "react-router-dom";
import FloatingButton from "../UI/FloatingButton";
import { useContext } from "react";
import TodoContext from "../../context/todoContext";
const TodoDetailsItem = () => {
  const { id } = useParams();
  const ctx = useContext(TodoContext);
  const navigate = useNavigate();
  let todoItem = ctx.todoItems.find((item) => item.id === parseInt(id));

  return (
    <>
      <div className="about-container">
        <h1>todo details</h1>
        <h3>Id:</h3>
        <p>{id}</p>
        <h3>Todo:</h3> <p>{todoItem.todo}</p>
        <h3>Complete:</h3> <p>{todoItem.complete.toString()}</p>
      </div>
      <button class="btn" onClick={() => navigate(-1)}>
        Back
      </button>
      <FloatingButton />
    </>
  );
};
export default TodoDetailsItem;
