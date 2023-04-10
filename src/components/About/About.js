import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import {
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./about.css";
function About() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchRepoInfos();
  }, []);

  function fetchRepoInfos() {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        console.log(users);
        console.log(data);
      });
  }

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
      <h1>List Of Users</h1>
      <div className="contentAbout">
        {users.map((i) => (
          <>
            <div className="user">
              <p key={i.id}>Id : {i.id}</p>
              <p>Title : {i.title}</p>
              <p>Completed : {i.completed + ""}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default About;
