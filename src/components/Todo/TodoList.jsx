import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../store/reducer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TodoDetails from "../TodoDetails";
const TodoList = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDeleteTodo = (todoValues) => {
    console.log(todoValues);
    dispatch(deleteTodo(todoValues));
  };
  const [showDetails, setShowDetails] = useState(false);
  const style = {
    textDecoration: 'none',
    color: 'black',
  }
  return (
    <Router>
      <div className="wrapper__todoList-items">
        <div className="todoList__items-above">
          <div className="todoList__items-left">
            <h3>{todo.title}</h3>
          </div>
          <div className="todoList__items-right">
            <p>Recorded at : {todo.recorded}</p>
            <ul>
              <li onClick={() => setShowDetails(!showDetails)}>
                <Link to="/details" style={style}>
                  {showDetails ? "(Hide Details)" : "(Show Details)"}
                </Link>
              </li>
              <li onClick={() => handleDeleteTodo(todo)}>(Remove Note)</li>
            </ul>
          </div>
        </div>
        {/* <div>{showDetails ? <TodoDetails todo={todo} /> : " "}</div> */}
        <div>
          {showDetails ? (
            <Switch>
              <Route path="/details">
                <TodoDetails todo={todo} />
              </Route>
            </Switch>
          ) : (
            " "
          )}
        </div>
      </div>
    </Router>
  );
};

export default TodoList;
