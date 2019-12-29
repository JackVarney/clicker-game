import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  score: 0
};

const scoreReducer = createReducer(initialState, {});

export { scoreReducer };
