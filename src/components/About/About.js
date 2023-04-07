import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faCheck } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setisLoading] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetching();
  }, []);

  async function fetching() {
    setisLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      );

      if (!response.ok) throw Error("Error..");

      const data = await response.json();

      setTasks(data);
    } catch (error) {
      setError("Error");
    }
    setisLoading(false);
  }

  let content = <p>Loading...</p>;

  if (error) content = <p>Error!</p>;

  if (!isLoading && tasks.length > 0) {
    content = tasks.map((item) => (
      <ul className="list-group todos mx-auto text-light">
        <li
          style={{ width: "35em" }}
          className={`list-group-item d-flex justify-content-between align-items-center  ${
            item.completed ? "item-complete" : ""
          }`}
        >
          <span>
            {" "}
            {item.id} - {item.title}
          </span>
          <FontAwesomeIcon
            style={{
              marginRight: "0.3em",
            }}
            icon={item.completed ? faBan : faCheck}
            className="pointer"
          />
        </li>
      </ul>
    ));
  }

  return <>{content}</>;
};
export default About;
