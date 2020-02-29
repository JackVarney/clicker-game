import { ActionCreator } from "@reduxjs/toolkit";
import { AppThunk } from "..";
import { addEvent } from "./add-event";
import { updateStaffCount } from "./update-staff-count";
import { createServeCustomerAction } from "../../game/events/serve-customer";
import { updateScore } from "./update-score";
import { staffHireCost } from "../../core/constants/staff-hire-cost";

const addStaffMember: ActionCreator<AppThunk> = () => (dispatch, getState) => {
  const {
    game: { score }
  } = getState();

  if (score >= staffHireCost) {
    dispatch(updateScore(-staffHireCost));
    dispatch(addEvent(createServeCustomerAction()));
    dispatch(updateStaffCount(1));
  }
};

export { addStaffMember };
