import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlicer";
import trutyReducer from "./trutySlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    truty: trutyReducer,
  },
});
export default store;
