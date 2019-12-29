import { createGame } from "../game";
import { store, resetStore } from "../../store";

jest.useFakeTimers();
beforeEach(() => {
  resetStore();
  createGame();
});

it("should increase count on new tick", () => {
  expect(store.getState().customers.count).toEqual(0);

  jest.advanceTimersByTime(1000);

  expect(store.getState().customers.count).toEqual(1);

  jest.advanceTimersByTime(1000);

  expect(store.getState().customers.count).toEqual(2);
});

it("should never exceed max queue length", () => {
  jest.advanceTimersByTime(100000);

  expect(store.getState().customers.count).toEqual(10);
});
