import { removeEvent } from "./remove-event";
import { updateStaffCount } from "./update-staff-count";
import { ActionCreator } from "@reduxjs/toolkit";
import { AppThunk } from "..";
import { serveCustomerFunctionKey } from "../../game/events/serve-customer";

const removeStaffMember: ActionCreator<AppThunk> = () => (
  dispatch,
  getState
) => {
  const {
    game: { numberOfStaff }
  } = getState();

  if (numberOfStaff !== 0) {
    dispatch(removeEvent(serveCustomerFunctionKey));
    dispatch(updateStaffCount(-1));
  }
};

export { removeStaffMember };
