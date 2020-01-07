import { configureStore } from "@reduxjs/toolkit";
import { scoreReducer } from "./reducers/score";
import { staffReducer } from "./reducers/staff";
import { customersReducer } from "./reducers/customers";

let store;

const resetStore = () => {
  store = configureStore({
    reducer: {
      score: scoreReducer,
      customers: customersReducer,
      staff: staffReducer
    }
  });
};

resetStore();

export { store, resetStore };
