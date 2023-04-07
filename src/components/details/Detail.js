import {useParams} from "react-router-dom";
import React from "react";

const Detail=()=>{
    console.log("hjjh")
    const {id} = useParams()
    const {todo} = useParams()
    const {complete} = useParams()
console.log(id,todo,complete)
    return (
            <>
                <h1>Detail item {id}</h1>
                <h2>{todo}</h2>
                <h2>{complete}</h2>
            </>
        );
}
export  default Detail;