import { createReducer } from "@reduxjs/toolkit";
import { customerReducerBuilder } from "./customer";
import { scoreReducerBuilder } from "./score";
import { staffReducerBuilder } from "./staff";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";

export const initialGameState = {
  customers: {
    count: 0,
    rate: 3,
    maxCustomers: 10
  },
  score: 0,
  maxStaff: 5,
  numberOfStaff: 0
};

export type GameState = typeof initialGameState | undefined;
export type GameBuilder = (builder: ActionReducerMapBuilder<GameState>) => void;

const gameDataReducer = createReducer(initialGameState, builder => {
  customerReducerBuilder(builder);
  scoreReducerBuilder(builder);
  staffReducerBuilder(builder);
});

export { gameDataReducer };
