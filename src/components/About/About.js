import { faBan, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const About = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
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
      <ul className="list-group todos mx-auto text-light">
        <li
          className={`list-group-item d-flex justify-content-between align-items-center ${
            item.completed ? "item-complete" : ""
          }`}
        >
          <span>{item.title}</span>
          <div>
            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={item.completed ? faBan : faCheck}
            />
          </div>
        </li>
      </ul>
    ));
  }

  return <>{content}</>;
};

export default About;
