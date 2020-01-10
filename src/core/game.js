import { dispatch, getState } from '../store';
import { updateScore } from '../store/actions/update-score';
import { updateCustomers } from '../store/actions/update-customers';
import { updateEventLimit } from '../store/actions/update-event-limit';
import { gameEventMap } from './game-event-map';

const INTERVAL_TIME = 1000;

function resetGame() {
  dispatch(updateScore(0));
}

function iterateEvents(events = []) {
  events.forEach((event, index) => {
    event.actions.forEach(actionOrActionName => {
      if (typeof actionOrActionName === 'string') {
        actionOrActionName = gameEventMap[actionOrActionName];
      }

      dispatch(actionOrActionName);
    });

    if (event.limit !== Infinity) {
      dispatch(
        updateEventLimit({
          index,
          limit: event.limit - 1,
        }),
      );
    }
  });
}

const processTick = () => {
  const {
    game: {
      customers: { rate },
    },
    events,
  } = getState();

  iterateEvents([...events, { actions: [updateCustomers(rate)], limit: 1 }]);
};

const createGame = () => {
  resetGame();

  setInterval(processTick, INTERVAL_TIME);
};

export { createGame };
