import { Reducer } from "@reduxjs/toolkit";
import { GameState, GameBuilder } from "./game";
import { changeAdvertisingPackage } from "../actions/change-advertising-package";

const _changeAdvertisingPackage: Reducer<GameState> = (state, { payload }) => ({
  ...state!,
  advertisingPackage: payload
});

const advertisingReducerBuilder: GameBuilder = builder => {
  builder.addCase(changeAdvertisingPackage, _changeAdvertisingPackage);
};

export { advertisingReducerBuilder };
