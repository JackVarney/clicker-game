import { configureStore } from "@reduxjs/toolkit";
import { scoreReducer } from "./reducers/score";
import { customersReducer } from "./reducers/customers";

let store;
const resetStore = () => {
  store = configureStore({
    reducer: {
      score: scoreReducer,
      customers: customersReducer
    }
  });
};

resetStore();

export { store, resetStore };
