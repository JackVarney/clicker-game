import { configureStore } from "@reduxjs/toolkit";
import { scoreReducer } from "./reducers/score";

const store = configureStore({
  reducer: {
    score: scoreReducer
  }
});

export { store };
