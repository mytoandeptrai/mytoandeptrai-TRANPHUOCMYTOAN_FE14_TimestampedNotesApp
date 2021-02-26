import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../store/reducer";

const TodoList = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDeleteTodo = (todoValues) => {
    console.log(todoValues);
    dispatch(deleteTodo(todoValues));
  };
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="wrapper__todoList-items">
      <div className="todoList__items-left">
        <h3>{todo.title}</h3>
        {showDetails ? <p>{todo.details}</p> : " "}
      </div>
      <div className="todoList__items-right">
        <p>Recorded at : {todo.recorded}</p>
        <ul>
          <li onClick={() => setShowDetails(!showDetails)}>{"Show Details"}</li>
          <li onClick={() => handleDeleteTodo(todo)}>{"Remove Note"}</li>
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
