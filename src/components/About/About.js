import React from 'react'
import { useEffect, useState } from "react";
import "./about.css"
const About = () => {
const [users, setUsers] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
fetchRepoInfos();
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
  
<div className="Content" key={item.id}>
 <div>
      <h3>ID : {item.id}</h3>
      <h4>{item.title}</h4>
      <h4>{item.completed}</h4>
      <hr />
</div>
</div>


));
}

return <>{content}</>;
}

export default About
