import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TodoContext from "../context";
import "./Detail.css";

const Detail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const context = useContext(TodoContext);
  const todo = context.todoList.filter((item) => item.id === +params.id)[0];

  return (
    <>
      <div>
        <h3>
          <span>ID :</span> {todo.id}
        </h3>
        <h3>
          <span>Todo :</span> {todo.todo}
        </h3>
        <h3>
          <span>Completed :</span> {todo.complete ? "true" : "false"}
        </h3>
        <h3>
          <span>Priority :</span> {todo.priority}
        </h3>
        <h3>
          <span>Created at :</span> {todo.createdAt.toLocaleString()}
        </h3>
        <h3>
          <span>Updated at :</span> {todo.updatedAt.toLocaleString()}
        </h3>
      </div>
      <button className="btn-nav" onClick={() => navigate(-1)}>
        Back
      </button>
    </>
  );
};
export default Detail;
