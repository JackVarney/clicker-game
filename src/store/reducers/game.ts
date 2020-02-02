import { createReducer } from "@reduxjs/toolkit";
import { initialGameState } from "./initial-game-state";
import { customerReducerBuilder } from "./customer";
import { scoreReducerBuilder } from "./score";
import { staffReducerBuilder } from "./staff";

const gameDataReducer = createReducer(initialGameState, builder => {
  customerReducerBuilder(builder);
  scoreReducerBuilder(builder);
  staffReducerBuilder(builder);
});

export { gameDataReducer };
