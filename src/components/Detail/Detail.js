import { Link, useParams } from "react-router-dom";
import "./Detail.css";
import { useContext } from "react";
import ExampleContext from "../context/context";
import {
  faChevronLeft, 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Detail() {
  const { id } = useParams();
  let ctx = useContext(ExampleContext);
  //const todoItems=ctx.myVar;

  const getItemById = (idItem) => {
    let itemSearch;
    for (let i = 0; i < ctx.todoItems.length; i++) {
      // console.log(todoItems[i])
      //itemSearch=todoItems[i];
      if (ctx.todoItems[i].id == idItem) {
        return ctx.todoItems[i];
      }
    }

    return null;
  };

  const badge=(priority) =>{
    switch (priority) {
      case 1:   
        return "bg-primary"    
      case 2:   
        return "bg-secondary" 
      case 3:   
        return "bg-success"    
      case 4:   
        return "bg-danger"   
      default:
        return ""
    }
  }
  const item = getItemById(id);

  return (
    <>
      <Link id="back" to="/todo">
      
      <FontAwesomeIcon
            style={{
              marginRight: "0.3em",
              width: "50 px",
            }}
            icon={ faChevronLeft }
            className="pointer"
                      
      />Back</Link>

      <h1>Todo Detail</h1>
      <div className="content">
        <p>Id : {item.id}</p>
        <p>Todo : {item.todo}</p>
        <p>Complete : {item.complete + ""}</p>
        <p>Priority : <span className={`badge ${ badge(item.priority) }`}>{item.priority}</span></p>
        <p>CreatedAt : {item.createdAt + ""}</p>
        <p>UpdatedAt : {item.updatedAt + ""}</p>
      </div>
    </>
  );
}
export default Detail;
