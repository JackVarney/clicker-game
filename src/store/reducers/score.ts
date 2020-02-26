import { updateScore } from "../actions/update-score";
import { Reducer } from "@reduxjs/toolkit";
import { GameBuilder, GameState } from "./game";

const _updateScore: Reducer<GameState> = (state, action) => ({
  ...state!,
  score: state!.score + action.payload
});

const scoreReducerBuilder: GameBuilder = builder =>
  builder.addCase(updateScore, _updateScore);

export { scoreReducerBuilder };
