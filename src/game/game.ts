import { dispatch, getState } from "../store";
import { updateScore } from "../store/actions/update-score";
import { updateEventLimit } from "../store/actions/update-event-limit";
import { GameEvent, GameEventKey } from "../core/types/GameEvent";
import { gameEventMap } from "./game-event-map";
import { GameAction } from "../core/types/GameAction";

const INTERVAL_TIME = 1000;

function iterateEvents(events: GameEvent[] = []) {
  const iterateActions = (limit: number, index: number) => (
    action: GameAction
  ) => {
    const actionCreator = gameEventMap[action.key];
    // @ts-ignore
    dispatch(actionCreator(...action.arguments));

    if (limit !== Infinity) {
      dispatch(
        updateEventLimit({
          index,
          limit: limit - 1
        })
      );
    }
  };

  events.forEach(({ actions, limit }, index) => {
    actions.forEach(iterateActions(limit, index));
  });
}

const tick = () => {
  const {
    game: {
      customers: { rate }
    },
    events
  } = getState();

  const increaseCustomersEvent: GameEvent = {
    name: "",
    actions: [
      {
        key: GameEventKey.updateCustomer,
        arguments: [rate]
      }
    ],
    limit: 1
  };

  iterateEvents([...events, increaseCustomersEvent]);
};

function resetGame() {
  dispatch(updateScore(0));
}

const createGame = () => {
  resetGame();

  setInterval(tick, INTERVAL_TIME);
};

export { createGame };
