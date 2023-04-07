const Form = ({ item, setItem, addItem }) => {
    return (
      <form className="add text-center my-4">
        <label htmlFor="add" className="add text-light">
          Add a new todo:
        </label>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            name="add"
            id="add"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button type="button" onClick={addItem}>
            Add
          </button>
        </div>
      </form>
    );
  };
  export default Form