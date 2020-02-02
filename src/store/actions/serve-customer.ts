import { ActionCreator } from "@reduxjs/toolkit";
import { updateCustomers } from "./update-customers";
import { updateScore } from "./update-score";
import { AppThunk } from "..";

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

export { serveCustomer };
