import React from "react";

const TodoDetails = ({todo}) => {
  return (
    <div className="todoList__items-below">
      <p>Details : {todo.details}</p>
    </div>
  );
};

export default TodoDetails;
