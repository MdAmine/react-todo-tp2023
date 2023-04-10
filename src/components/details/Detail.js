import {useParams} from "react-router-dom";
import React, {useContext} from "react";
import Context from "../contexte/Context";

const Detail=()=>{

    const {detailItem}= useContext(Context);
    const param = useParams();

    const result = detailItem(param.id)


    return (
            <div style={{textDecoration: 'none', color: 'white'}}>
                <h5>ID : {result.id}</h5>
                <h5>Todo: {result.todo}</h5>
                <h5>Priority: {result.priority}</h5>
                <h5>Completed: {result.complete ? "completed" : "Not yet"}</h5>
                <h5>created AT : {new Date(result.createAT).toString()}</h5>
                <h5>Last modif AT: {new Date(result.updateAT).toString()}</h5>
            </div>
        );
}
export  default Detail;