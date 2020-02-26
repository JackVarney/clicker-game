import { updateCustomers } from "../actions/update-customers";
import { Reducer } from "@reduxjs/toolkit";
import { GameState, GameBuilder } from "./game";

const _updateCustomers: Reducer<GameState> = (state, { payload }) => {
  const { customers } = state!;
  const newCustomerCount = customers.count + payload;
  const newCustomerCountIsNegative = newCustomerCount < 0;
  const newCustomerCountIsLowerThanMaxCustomerCount =
    newCustomerCount <= customers.maxCustomers;

  const count = newCustomerCountIsNegative
    ? 0
    : newCustomerCountIsLowerThanMaxCustomerCount
    ? newCustomerCount
    : customers.maxCustomers;

  return {
    ...state!,
    customers: {
      ...customers,
      count
    }
  };
};

const customerReducerBuilder: GameBuilder = builder => {
  builder.addCase(updateCustomers, _updateCustomers);
};

export { customerReducerBuilder };
