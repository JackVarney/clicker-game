import { addEvent } from "./add-event";
import { updateStaffCount } from "./update-staff-count";
import { ActionCreator } from "@reduxjs/toolkit";
import { AppThunk } from "..";
import { createServeCustomerAction } from "../../game/events/serve-customer";

const addStaffMember: ActionCreator<AppThunk> = () => dispatch => {
  dispatch(addEvent(createServeCustomerAction()));
  dispatch(updateStaffCount(1));
};

export { addStaffMember };
