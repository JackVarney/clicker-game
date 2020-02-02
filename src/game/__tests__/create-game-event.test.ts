import { createGameAction } from "../create-game-action";

it("should create a game event", () => {
  const gameEvent = createGameAction("event")();

  expect(gameEvent).toEqual({
    name: "event",
    actions: [],
    limit: Infinity
  });
});
