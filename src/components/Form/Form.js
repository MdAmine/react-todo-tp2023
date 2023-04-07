const Form = ({ addItem, newTodoItem, setNewTodoItem }) => {
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
        value={newTodoItem}
        onChange={(e) => {
          setNewTodoItem(e.target.value);
        }}
      />
    </form>
  );
};
export default Form;
