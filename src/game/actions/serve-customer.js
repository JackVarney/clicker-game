import { updateCustomers } from "../../store/actions/update-customers";
import { updateScore } from "../../store/actions/update-score";
import { createGameEvent } from "../create-game-event";

const serveCustomerFunctionKey = "SERVE_CUSTOMER";
const serveCustomer = (dispatch, getState) => {
  const {
    game: {
      customers: { count }
    }
  } = getState();

  if (count > 0) {
    dispatch(updateCustomers(-1));
    dispatch(updateScore(+5));
  }
};

const createServeCustomerAction = (limit = Infinity) =>
  createGameEvent(serveCustomerFunctionKey)([serveCustomerFunctionKey], limit);

export { serveCustomer, serveCustomerFunctionKey, createServeCustomerAction };
