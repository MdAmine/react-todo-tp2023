import React, {useEffect, useState} from "react";
import './toDoList.css'

const ToDoList = ()=>{
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRepoInfos().then(r => console.log(r));
    }, []);

    async function fetchRepoInfos() {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/");

            if (!response.ok) throw Error("Error..");

            const data = await response.json();
            setUsers(data);
        } catch (error) {
            setError("Error");
        }
        setIsLoading(false);
    }


    let content = <p>Loading...</p>;

    if (error) content = <p>Error!</p>;

    if (!isLoading && users.length > 0) {
        content = users.map((item) => (
            <div key={item.id}>
                <h1>ID : {item.id}</h1>
                <h2>{item.title}</h2>
                <hr/>
            </div>
        ));
    }

    return <>{content}</>;
}
export default ToDoList;