import { createReducer } from "@reduxjs/toolkit";
import { updateScore } from "../actions/update-score";

const initialState = 0;

const scoreReducer = createReducer(initialState, {
  [updateScore.type](state, action) {
    return state + action.payload;
  }
});

export { scoreReducer };
