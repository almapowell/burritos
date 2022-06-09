import { configureStore } from "@reduxjs/toolkit";
import burritoReducer from "./reducer";

export const store = configureStore({
  reducer: {
    burritoState: burritoReducer,
  },
});
