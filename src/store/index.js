import { configureStore } from "@reduxjs/toolkit";
import { scoreReducer } from "./reducers/score";
import { staffReducer } from "./reducers/staff";
import { customersReducer } from "./reducers/customers";
import { eventsReducer } from "./reducers/events";

let store;

const resetStore = () => {
  store = configureStore({
    reducer: {
      score: scoreReducer,
      customers: customersReducer,
      staff: staffReducer,
      events: eventsReducer
    }
  });
};

resetStore();

export { store, resetStore };
