import { useNavigate, useParams } from "react-router-dom";
import React, { useContext } from "react";
import TodosContext from "../context/context";

function Detail(props) {

  const { id } = useParams();
  const navigate = useNavigate();
  let todoContext = useContext(TodosContext);
  const item = todoContext.todoItems.find((item) => item.id === +id);
console.log(item)

  return (
    <>
      <header className="text-center text-light my-4">
        <h1 className="mb-5">Detail_Todo</h1>
      </header>
      <div className="text-center text-light my-4">
        <h3> ID : {item.id}</h3>
        <h3> Todo : {item.todo}</h3>
         <h6> creat date:{item.createdAt.toUTCString()}</h6>
          <h6>update date:{item.updatedAt.toUTCString()}</h6>


        <button
          type="submit"
          className="btn btn-dark mt-5"
          onClick={() => navigate("listTodo")}
        >
          Back
        </button>
      </div>
    </>
  );
}
export default Detail;
