import { updateCustomers } from './update-customers';
import { updateScore } from './update-score';
import { createGameEvent } from '../../core/create-game-event';

const serveCustomerKey = 'SERVE_CUSTOMER';
const serveCustomer = (dispatch, getState) => {
  const {
    game: {
      customers: { count },
    },
  } = getState();

  if (count > 0) {
    dispatch(updateCustomers(-1));
    dispatch(updateScore(+5));
  }
};

const createServeCustomerEvent = () =>
  createGameEvent(serveCustomerKey)([serveCustomerKey]);

export { serveCustomer, serveCustomerKey, createServeCustomerEvent };
