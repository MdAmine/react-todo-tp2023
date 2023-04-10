const TodoForm = ({ item, setItem, addItem }) => {
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
    </form>
  );
};
export default TodoForm;
