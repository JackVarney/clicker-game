import { createGame } from "../game";
import * as storeModule from "../../store";
import { dispatch, getState, resetStore } from "../../store";
import { addEvent } from "../../store/actions/add-event";
import { updateEventLimit } from "../../store/actions/update-event-limit";
import { createGameAction } from "../create-game-action";

jest.useFakeTimers();

beforeEach(() => {
  resetStore();

  jest.spyOn(storeModule, "dispatch");
  dispatch(
    addEvent(createGameAction("", [{ type: "SOME POSITIVE EVENT" }])(1))
  );

  createGame();
});

it("should increase count on new tick", () => {
  expect(getState().game.customers.count).toEqual(0);

  jest.advanceTimersByTime(1000);

  expect(getState().game.customers.count).toEqual(3);

  jest.advanceTimersByTime(1000);

  expect(getState().game.customers.count).toEqual(6);
});

it("should dispatch each event in the store", () => {
  jest.advanceTimersByTime(1000);

  expect(dispatch).toHaveBeenCalledWith({
    type: "SOME POSITIVE EVENT"
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
