import { createGameEvent } from "../create-game-event";

it("should create a game event", () => {
  const gameEvent = createGameEvent("event")();

  expect(gameEvent).toEqual({
    name: "event",
    actions: [],
    limit: Infinity
  });
});
