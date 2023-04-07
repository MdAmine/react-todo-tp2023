import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailContext from "../context";

const Detail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const context = useContext(DetailContext);
  const todo = context.todoList.filter((item) => (item.id === +params.id))[0];

  return (
    // <div>
    //     <h3>{params.id}</h3>
    //     <h3>{params.todo}</h3>
    //     <h3>{params.complete}</h3>
    // </div>
    <>
      <div>
        <h3>{todo.id}</h3>
        <h3>{todo.todo}</h3>
        <h3>{todo.complete}</h3>
      </div>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
};
export default Detail;
