const TodoForm = ({ item, setItem, addItem, setPriority }) => {
  return (
    <form className="add text-center my-4" onSubmit={addItem}>
      <label htmlFor="add" className="add text-light">
        Add a new todo:
      </label>
      <input
        type="text"
        className="form-control m-auto"
        name="add"
        id="add"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button className="badge bg-primary" onClick={() => setPriority(1)}>
        P1
      </button>
      <button className="badge bg-secondary" onClick={() => setPriority(2)}>
        P2
      </button>
      <button className="badge bg-success" onClick={() => setPriority(3)}>
        P3
      </button>
      <button className="badge bg-danger" onClick={() => setPriority(4)}>
        P4
      </button>
    </form>
  );
};
export default TodoForm;
