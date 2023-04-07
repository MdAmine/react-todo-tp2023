import { useParams } from "react-router-dom";
import "./Detail.css";
import { useContext } from "react";
import ExampleContext from "../context/context";
function Detail() {
    const { id } = useParams();
    let ctx = useContext(ExampleContext);
    const todoItems=ctx.myVar;

    const getItemById=(idItem) =>{
        let itemSearch;
        for (let i = 0; i < todoItems.length; i++) {
           // console.log(todoItems[i])
            //itemSearch=todoItems[i];
            if (todoItems[i].id == idItem) {
              return todoItems[i]
            }
        } 

        return null
    }
    const item=getItemById(id);
    
     
    return (     
         <div className="content">
            <p >Id : {item.id}</p>  
            <p >Todo : {item.todo}</p>
            <p >Complete : {item.complete+""}</p>  
             
         </div>    
    );

}
export default Detail