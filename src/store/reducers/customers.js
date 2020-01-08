import { createReducer } from "@reduxjs/toolkit";
import { updateCustomers } from "../actions/update-customers";

const initialState = {
  count: 0,
  rate: 3,
  maxCustomers: 10
};

const customersReducer = createReducer(initialState, {
  [updateCustomers.type](state, action) {
    const newCustomerCount = state.count + action.payload;
    const newCustomerCountIsNegative = newCustomerCount < 0;
    const newCustomerCountIsLowerThanMaxCustomerCount =
      newCustomerCount <= state.maxCustomers;

    return {
      ...state,
      count: newCustomerCountIsNegative
        ? 0
        : newCustomerCountIsLowerThanMaxCustomerCount
        ? newCustomerCount
        : state.maxCustomers
    };
  }
});

export { customersReducer };
