import { eventsReducer } from "../events";
import { addEvent } from "../../actions/add-event";
import { updateEventLimit } from "../../actions/update-event-limit";

it("should revert to default", () => {
  const response = eventsReducer(undefined, {});

  expect(response).toEqual([]);
});

it("should add an event to the stack", () => {
  const response = eventsReducer(undefined, addEvent("should be a function"));

  expect(response).toEqual(["should be a function"]);
});

it("should alter the limit of an item and remove it from the stack", () => {
  const response = eventsReducer(
    [
      {
        limit: 1
      }
    ],
    updateEventLimit({
      index: 0,
      limit: 0
    })
  );

  expect(response).toEqual([]);
});
