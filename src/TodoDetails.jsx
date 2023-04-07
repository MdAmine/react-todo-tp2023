import React from "react";

const TodoDetails = ({ todoItems, itemId }) => {
  const selectedItem = todoItems.find((item) => item.id === itemId);

  return (
    <div>
      <h2>Todo Details</h2>
      <p>Todo: {selectedItem.todo}</p>
      <p>Complete: {selectedItem.complete ? "Yes" : "No"}</p>
    </div>
  );
};

export default TodoDetails;
