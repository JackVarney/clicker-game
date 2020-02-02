import { updateScore } from "../actions/update-score";
import { GameState, GameBuilder } from "./initial-game-state";
import { Reducer } from "@reduxjs/toolkit";

const _updateScore: Reducer<GameState> = (state, action) => ({
  ...state!,
  score: state!.score + action.payload
});

const scoreReducerBuilder: GameBuilder = builder =>
  builder.addCase(updateScore, _updateScore);

export { scoreReducerBuilder };
