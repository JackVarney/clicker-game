import { store } from "../store";
import { updateScore } from "../store/actions/update-score";
import { updateCustomers } from "../store/actions/update-customers";

const INTERVAL_TIME = 1000;
const MAX_QUEUE_LENGTH = 10;

function resetGame() {
  const { score } = store.getState();
  store.dispatch(updateScore(score - score));
}

const createGame = () => {
  resetGame();

  setInterval(() => {
    const {
      customers: { count, rate }
    } = store.getState();

    if (count < MAX_QUEUE_LENGTH) {
      store.dispatch(updateCustomers(rate));
    }
  }, INTERVAL_TIME);
};

export { createGame };
