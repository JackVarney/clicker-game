import { dispatch, getState } from "../store";
import { updateScore } from "../store/actions/update-score";
import { updateCustomers } from "../store/actions/update-customers";
import { updateEventLimit } from "../store/actions/update-event-limit";
import { gameEventMap, GameEventMap } from "./game-event-map";
import { GameEvent } from "../core/types/GameEvent";

const INTERVAL_TIME = 1000;

function iterateEvents(events: GameEvent[] = []) {
  const iterateActions = (limit: number, index: number) => (
    actionOrActionFunctionKey: keyof GameEventMap | Function
  ) => {
    const isFunctionKey = typeof actionOrActionFunctionKey === "string";

    dispatch(
      isFunctionKey
        ? gameEventMap[actionOrActionFunctionKey as keyof GameEventMap]
        : actionOrActionFunctionKey
    );

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
    actions: [updateCustomers(rate)],
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
