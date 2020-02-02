import { updateCustomers } from "../../store/actions/update-customers";
import { updateScore } from "../../store/actions/update-score";
import { createGameAction } from "../create-game-action";
import { AppThunk } from "../../store";
import { ActionCreator } from "@reduxjs/toolkit";

const serveCustomerFunctionKey = "SERVE_CUSTOMER";

const serveCustomer: ActionCreator<AppThunk> = () => (dispatch, getState) => {
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

const createServeCustomerAction = createGameAction(serveCustomerFunctionKey, [
  serveCustomerFunctionKey
]);

export { serveCustomer, serveCustomerFunctionKey, createServeCustomerAction };
