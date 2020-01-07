import { createReducer } from "@reduxjs/toolkit";
import { addEvent } from "../actions/add-event";

const initialState = [];

const eventsReducer = createReducer(initialState, {
  [addEvent.type](state, action) {
    return [...state, action.payload];
  }
});

export { eventsReducer };
