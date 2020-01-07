import { createGame } from "../game";
import * as storeModule from "../../store";
import { dispatch, getState, resetStore } from "../../store";
import { addEvent } from "../../store/actions/add-event";
import { updateEventLimit } from "../../store/actions/update-event-limit";

jest.useFakeTimers();
beforeEach(() => {
  resetStore();

  jest.spyOn(storeModule, "dispatch");
  dispatch(addEvent({ type: "SOME POSITIVE EVENT", limit: 1 }));

  createGame();
});

it("should increase count on new tick", () => {
  expect(getState().customers.count).toEqual(0);

  jest.advanceTimersByTime(1000);

  expect(getState().customers.count).toEqual(1);

  jest.advanceTimersByTime(1000);

  expect(getState().customers.count).toEqual(2);
});

it("should never exceed max queue length", () => {
  jest.advanceTimersByTime(100000);

  expect(getState().customers.count).toEqual(10);
});

it("should dispatch each event in the store where its limit is positive", () => {
  jest.advanceTimersByTime(1000);

  expect(dispatch).toHaveBeenCalledWith({
    type: "SOME POSITIVE EVENT",
    limit: 1
  });
});

it("should reduce the limit on any event whos limit is not infinity", () => {
  jest.advanceTimersByTime(1000);

  expect(dispatch).toHaveBeenCalledWith(
    updateEventLimit({
      index: 0,
      limit: 0
    })
  );
});
