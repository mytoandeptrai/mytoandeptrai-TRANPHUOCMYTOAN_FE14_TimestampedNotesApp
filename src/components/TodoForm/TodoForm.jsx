import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/reducer/index";
const TodoForm = () => {
  const d = new Date();
  const weekDay = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "may",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = weekDay[d.getDay()];
  const month = months[d.getMonth()];
  const date = d.getDate();
  const year = d.getFullYear();
  console.log(day,month,date,year);
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();
  const recorded = day + " " + month + " " + date + " " + year + " " + currTime;
  const dispatch = useDispatch();
  const [taskValue, setTaskValue] = useState({
    title: "",
    details: "",
    recorded: "",
  });
  const onChange = (e) => {
    setTaskValue({
      ...taskValue,
      [e.target.name]: e.target.value,
      recorded: recorded,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(taskValue);
    if (taskValue.title.trim() === "" || taskValue.details.trim() === "") {
      return;
    } else {
      dispatch(addTodo(taskValue));
      setTaskValue({
        title: "",
        details: "",
      });
    }
  };
  return (
    <div className="todoForm__wrapper">
      <form onSubmit={onSubmit}>
        <div className="input__title">
          <input
            type="text"
            value={taskValue.title}
            name="title"
            onChange={onChange}
            placeholder="Note Title"
          />
        </div>
        <div className="input__details">
          <input
            type="text"
            value={taskValue.details}
            name="details"
            onChange={onChange}
            placeholder="Note Details"
          />
        </div>
        <div className="input__btn">
          <button type="submit">Add Note</button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
