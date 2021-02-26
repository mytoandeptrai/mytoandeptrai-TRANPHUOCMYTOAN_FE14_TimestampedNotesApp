import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducer";

//store
const store = configureStore({
  reducer: {
    todosReducer: todosReducer,
  },
});

//export
export default store;
