import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function Todo() {
  const generateId = () => Math.floor(Math.random() * 1000);
  let todoItems = [
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
    },
  ];


  return (
    <>
      <header className="text-center text-light my-4">
        <h1 className="mb-5">Todo List</h1>
        <input
          type="text"
          className="form-control m-auto"
          name="search"
          placeholder="search todos"
        />
      </header>
      {/* List */}
      {todoItems.map((i) => (
        <TodoItem item={i} />
      ))};
      {/* Form */}
      <TodoForm />
    </>
  );
}

export default Todo;
