import { useContext } from "react";
import { useParams,useNavigate } from "react-router-dom";
import TodoContext from "../Context/TodoContext";

const TodoDetail = () => {
    let navigation = useNavigate();
    let ctx = useContext(TodoContext);
    const param = useParams();

    console.log(ctx.todo)
    const item = ctx.todo.find(i => i.id==param.id)
    
    return(
        <div className="text-center text-light my-4">
            <h1 className="mb-5">ToDo Item</h1>
            <h5>ID : {item.id}</h5>
            <h5>Todo: {item.todo}</h5>
            <h5>Completed: {item.complete ? "completed" : "Not yet"}</h5>
            <h5>Priority : {item.priority}</h5>
            <h5>created At : { item.createdAT ? new Date(item.createdAT).toLocaleString('en-US')  : " No date"}</h5>
            <h5>updated At : {item.updatedAt ? new Date(item.updatedAt).toLocaleString('en-US') : " No date"}</h5>
            <button className="btn btn-dark mt-4"
            onClick={()=>navigation('/todo')}>Back</button>
        </div>
    )
}

export default TodoDetail;