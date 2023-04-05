import { useState } from "react";
import TodoItem from "./TodoItem";

function Todo() {
  const generateId = () => Math.floor(Math.random() * 1000);
  const [todoItems, setTodoItems] = useState([
    {
      id: generateId(),
      todo: "Read books",
      complete: false,
    },
    {
      id: generateId(),
      todo: "Journaling",
      complete: false,
    },
    {
      id: generateId(),
      todo: "Make Dinner",
      complete: false,
    },
    {
      id: generateId(),
      todo: "Push-ups",
      complete: false,
    }
  ]);

  const completeTodoItem = (id) => {
    const newTodoItems = todoItems.map((item) =>
      item.id === id ? { ...item, complete: !item.complete } : item
    );
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <div className="container">
        <header className="text-center text-light my-4">
          <h1 className="mb-5">Todo List</h1>
          <input
            type="text"
            className="form-control m-auto"
            name="search"
            placeholder="search todos"
          />
        </header>
        {todoItems.map((i) => (
          <TodoItem key={i.id} item={i} completeTodoItem={completeTodoItem}/>
        ))}

        {/* <ul className="list-group todos mx-auto text-light">
            <li
              className={`list-group-item d-flex justify-content-between align-items-center`}
            >
              <span>Read Books</span>
              <div>
                <FontAwesomeIcon
                  style={{
                    marginRight: "0.3em",
                  }}
                  icon={faCheck}
                  className="pointer"
                />
    
                <FontAwesomeIcon
                  style={{
                    marginRight: "0.3em",
                  }}
                  icon={faPenToSquare}
                  className="pointer"
                />
                <FontAwesomeIcon icon={faTrashAlt} className="pointer" />
              </div>
            </li>
          </ul>
    
          <ul className="list-group todos mx-auto text-light">
            <li
              className={`list-group-item d-flex justify-content-between align-items-center`}
            >
              <span>Sport</span>
              <div>
                <FontAwesomeIcon
                  style={{
                    marginRight: "0.3em",
                  }}
                  icon={faCheck}
                  className="pointer"
                />
    
                <FontAwesomeIcon
                  style={{
                    marginRight: "0.3em",
                  }}
                  icon={faPenToSquare}
                  className="pointer"
                />
                <FontAwesomeIcon icon={faTrashAlt} className="pointer" />
              </div>
            </li>
          </ul> */}

        {/* <form className="add text-center my-4">
          <label htmlFor="add" className="add text-light">
            Add a new todo:
          </label>
          <input
            type="text"
            className="form-control m-auto"
            name="add"
            id="add"
          />
        </form> */}
      </div>
    </>
  );
}

export default Todo;
