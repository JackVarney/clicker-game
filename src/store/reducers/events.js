import { createReducer } from "@reduxjs/toolkit";
import { addEvent } from "../actions/add-event";
import { updateEventLimit } from "../actions/update-event-limit";

const initialState = [];

const _addEvent = (state, { payload }) => [...state, payload];

const _updateEventLimit = (state, { payload: { index, limit } }) => {
  const newState = [...state];

  if (limit === 0) {
    newState.splice(index, 1);
  } else {
    newState[index].limit = limit;
  }

  return newState;
};

const eventsReducer = createReducer(initialState, {
  [addEvent.type]: _addEvent,
  [updateEventLimit.type]: _updateEventLimit
});

export { eventsReducer };
