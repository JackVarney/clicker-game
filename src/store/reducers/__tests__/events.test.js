import { eventsReducer } from "../events";
import { addEvent } from "../../actions/add-event";

it("should revert to default", () => {
  const response = eventsReducer(undefined, {});

  expect(response).toEqual([]);
});

it("should add an event to the stack", () => {
  const response = eventsReducer(undefined, addEvent("should be a function"));

  expect(response).toEqual(["should be a function"]);
});
