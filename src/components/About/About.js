import { useEffect, useState } from "react";
import "./About.css";

const About = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getListUsers();
  }, []);

  //   function getListUsers() {
  //     setIsLoading(true);
  //     setError(null);
  //     fetch("https://jsonplaceholder.typicode.com/todos/")
  //       .then((response) => {
  //         if (response.ok) {
  //           return response.json();
  //         }
  //         throw response;
  //       })
  //       .then((data) => setUsers(data))
  //       .catch((error) => console.log("Error fetching data " + error));
  //     setIsLoading(false);
  //   }
  async function getListUsers() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      );

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
        <h3>ID : {item.id}</h3>
        <h4>TITLE : {item.title}</h4>
        <h4>COMPLETED : {item.completed ? "true" : "false"}</h4>
        <hr />
      </div>
    ));
  }

  return <>{content}</>;
};
export default About;
