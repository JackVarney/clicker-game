import { createReducer, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { customerReducerBuilder } from "./customer";
import { scoreReducerBuilder } from "./score";
import { staffReducerBuilder } from "./staff";
import { advertisingReducerBuilder } from "./advertising";
import { AdvertisingPackage } from "../../core/types/AdvertisingPackage";

export const initialGameState = {
  customers: {
    count: 0,
    rate: 3,
    maxCustomers: 10
  },
  score: 0,
  maxStaff: 5,
  numberOfStaff: 0,
  advertisingPackage: AdvertisingPackage.none
};

export type GameState = typeof initialGameState | undefined;
export type GameBuilder = (builder: ActionReducerMapBuilder<GameState>) => void;

const gameDataReducer = createReducer(initialGameState, builder => {
  customerReducerBuilder(builder);
  scoreReducerBuilder(builder);
  staffReducerBuilder(builder);
  advertisingReducerBuilder(builder);
});

export { gameDataReducer };
