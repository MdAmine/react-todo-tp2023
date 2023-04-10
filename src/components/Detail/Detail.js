import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import MyContext from "../../contex";

const Detail = () => {
  const { id } = useParams();
  let ctx = useContext(MyContext).todoItems;
  console.log(ctx);
  const item = ctx.find((itm) => itm.id == id);
  return (
    <div className="text-center text-light my-4">
      <h1 className="mb-5">ToDo Item</h1>
      <h5>ID : {item.id}</h5>
      <h5>Todo: {item.todo}</h5>
      <h5>Created At: {item.createdAt}</h5>
      {item.updatedAt !== "" ? <h5>Last Update: {item.updatedAt}</h5> : ""}
      <h5>Priority: {item.priority}</h5>
      <h5>Completed: {item.complete ? "YES" : "NO"}</h5>
      <Link className="btn btn-dark mt-4" to="/">
        Back
      </Link>
    </div>
  );
};
export default Detail;
