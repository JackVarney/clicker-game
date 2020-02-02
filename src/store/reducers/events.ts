import { createReducer, Reducer } from "@reduxjs/toolkit";
import { addEvent } from "../actions/add-event";
import { updateEventLimit } from "../actions/update-event-limit";
import { removeEvent } from "../actions/remove-event";
import { GameEvent } from "../../core/types/GameEvent";

type EventsState = typeof initialState;
const initialState: GameEvent[] = [];

const _addEvent: Reducer<EventsState> = (state, { payload }) => [
  ...state!,
  payload
];

const _updateEventLimit: Reducer<EventsState> = (
  state,
  { payload: { index, limit } }
) => {
  const newState = [...state!];

  if (limit === 0) {
    newState.splice(index, 1);
  } else {
    newState[index].limit = limit;
  }

  return newState;
};

const _removeEvent: Reducer<EventsState> = (state, { payload }) => {
  const indexOfEventToRemove = state!.findIndex(el => el.name === payload);

  const newState = [...state!];
  newState.splice(indexOfEventToRemove, 1);

  return newState;
};

const eventsReducer = createReducer(initialState, {
  [addEvent.type]: _addEvent,
  [updateEventLimit.type]: _updateEventLimit,
  [removeEvent.type]: _removeEvent
});

export { eventsReducer };
