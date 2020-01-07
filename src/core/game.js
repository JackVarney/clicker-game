import { dispatch, getState } from "../store";
import { updateScore } from "../store/actions/update-score";
import { updateCustomers } from "../store/actions/update-customers";
import { updateEventLimit } from "../store/actions/update-event-limit";

const INTERVAL_TIME = 1000;
const MAX_QUEUE_LENGTH = 10;

function resetGame() {
  const { score } = getState();
  dispatch(updateScore(score - score));
}

function iterateEvents(events = []) {
  events.forEach((event, index) => {
    dispatch(event);

    if (events.limit !== Infinity) {
      dispatch(
        updateEventLimit({
          index,
          limit: event.limit - 1
        })
      );
    }
  });
}

const createGame = () => {
  resetGame();

  setInterval(() => {
    const {
      customers: { count, rate },
      events
    } = getState();

    if (count < MAX_QUEUE_LENGTH) {
      dispatch(updateCustomers(rate));
    }

    iterateEvents(events);
  }, INTERVAL_TIME);
};

export { createGame };
