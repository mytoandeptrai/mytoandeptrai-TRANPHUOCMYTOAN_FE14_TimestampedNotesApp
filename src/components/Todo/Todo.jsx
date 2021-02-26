import React, { useState } from "react";
import { useSelector } from "react-redux";
import { todosSelector } from "../../store/reducer";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const todoList = useSelector(todosSelector);
  return (
    <div className="wrapper">
      <h1>Timestamped Notes App</h1>
      <TodoForm />
      <div className="wrapper__todoList">
        {todoList.map((todo) => (
          <TodoList todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default Todo;
