import React from "react";

const TodoDetails = ({todo}) => {
  const style = {
    fontWeight: 400,
  }
  return (
    <div className="todoList__items-below">
      <p style={style}>Details : {todo.details}</p>
    </div>
  );
};

export default TodoDetails;
