import { removeEvent } from "./remove-event";
import { updateStaffCount } from "./update-staff-count";
import { serveCustomerFunctionKey } from "../../game/actions/serve-customer";
import { ActionCreator } from "@reduxjs/toolkit";
import { AppThunk } from "..";

const removeStaffMember: ActionCreator<AppThunk> = () => dispatch => {
  dispatch(removeEvent(serveCustomerFunctionKey));
  dispatch(updateStaffCount(-1));
};

export { removeStaffMember };
