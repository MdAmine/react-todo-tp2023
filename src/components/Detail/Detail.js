import {useNavigate, useParams} from "react-router-dom";
import React from "react";

function Detail(props) {

    const { id,todo } = useParams();
    const navigate=useNavigate()


    return(
        <>
            <header className="text-center text-light my-4">
                <h1 className="mb-5">Detail_Todo</h1>


            </header>
            <div className="text-center text-light my-4" >
                <h3> ID : {id}</h3>
                <h3>Todo:  {todo}</h3>

                <button type="submit" className="btn btn-dark mt-5" onClick={()=>navigate("listTodo")  }>
                    Back
                </button>
            </div>

        </>

    )
}
export default Detail;