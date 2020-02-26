import { updateStaffCount } from "../actions/update-staff-count";
import { GameState, GameBuilder } from "./game";
import { Reducer } from "@reduxjs/toolkit";

const _updateStaffCount: Reducer<GameState> = (state, { payload }) => {
  const staffCount = state!.numberOfStaff + payload;

  return {
    ...state!,
    numberOfStaff: staffCount > state!.maxStaff ? state!.maxStaff : staffCount
  };
};

const staffReducerBuilder: GameBuilder = builder =>
  builder.addCase(updateStaffCount, _updateStaffCount);

export { staffReducerBuilder };
