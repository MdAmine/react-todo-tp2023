import { useEffect, useState } from "react";

import "./about.css";
function About() {

  const [users, setUsers] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  //const [error, setError] = useState(null);

  useEffect(() => {
    fetchRepoInfos();
  }, []);

  function fetchRepoInfos() {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        console.log(users)
        console.log(data)
      });
  }
  

  return ( 
    <>
        {users.map((i) => (
          <div className="content">
            <p key={i.id}>Id : {i.id}</p>    
            <p >Title : {i.title}</p> 
            <p >Completed : {i.completed+""}</p> 
          </div>     
        ))}
    </>  
  );
}
export default About;
