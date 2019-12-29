import { createReducer } from "@reduxjs/toolkit";
import { updateCustomers } from "../actions/update-customers";

const initialState = {
  count: 0,
  rate: 1
};

const customersReducer = createReducer(initialState, {
  [updateCustomers.type](state, action) {
    return {
      ...state,
      count: state.count + action.payload
    };
  }
});

export { customersReducer };
