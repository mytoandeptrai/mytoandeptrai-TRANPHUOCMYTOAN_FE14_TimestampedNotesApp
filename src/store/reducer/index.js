import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const todosSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [
      {
        id: uuidv4(),
        title: "ReactJS",
        recorded: "Sun Mar 11 2018 18:47:45",
        details:
          "A JavaScript library for building user interfaces.",
      },
      {
        id: uuidv4(),
        title: "HTML",
        recorded: "Sun Mar 11 2018 18:50:58",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid labore dolor beatae similique dicta sed illo quo necessitatibus aliquam dolores.",
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.allTodos.push({
        id: uuidv4(),
        recorded: action.payload.recorded,
        title: action.payload.title,
        details: action.payload.details,
      });
    },
    deleteTodo: (state, action) => {
      const todoId = action.payload.id;
      console.log(todoId);
      state.allTodos = state.allTodos.filter((todo) => todo.id !== todoId);
    },
  },
});

//reducers
const todosReducer = todosSlice.reducer;

//selector
export const todosSelector = (state) => state.todosReducer.allTodos;
//action selector
export const { addTodo, deleteTodo } = todosSlice.actions;
//export
export default todosReducer;
