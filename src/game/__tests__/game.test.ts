import { createGame } from "../game";
import * as storeModule from "../../store";
import { dispatch, getState, resetStore } from "../../store";
import { addEvent } from "../../store/actions/add-event";
import { updateEventLimit } from "../../store/actions/update-event-limit";
import { createGameEvent } from "../create-game-event";
import { GameEventKey } from "../../core/types/GameEvent";
import { serveCustomer } from "../../store/actions/serve-customer";
import { updateCustomers } from "../../store/actions/update-customers";

jest.useFakeTimers();

let dispatchSpy: jest.SpyInstance;
beforeEach(() => {
  resetStore();

  dispatchSpy = jest.spyOn(storeModule, "dispatch");

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
  dispatch(
    addEvent(
      createGameEvent("", [
        {
          key: GameEventKey.updateCustomer,
          arguments: [1]
        }
      ])(1)
    )
  );

  jest.advanceTimersByTime(1000);

  expect(dispatch).toHaveBeenCalledWith(updateCustomers(1));
});

it("should reduce the limit on any event whos limit is not infinity", () => {
  dispatch(
    addEvent(
      createGameEvent("", [
        {
          key: GameEventKey.serveCustomer,
          arguments: []
        }
      ])(1)
    )
  );

  jest.advanceTimersByTime(1000);

  expect(dispatch).toHaveBeenCalledWith(
    updateEventLimit({
      index: 0,
      limit: 0
    })
  );
});
