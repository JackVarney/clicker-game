import { GameEvent } from "../core/types/GameEvent";
import { GameAction } from "../core/types/GameAction";

const createGameEvent = (name: string, actions: GameAction[]) => (
  limit = Infinity
): GameEvent => ({
  name,
  actions,
  limit
});

export { createGameEvent };
