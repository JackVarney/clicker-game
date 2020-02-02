import { addEvent } from "./add-event";
import { updateStaffCount } from "./update-staff-count";
import { createServeCustomerAction } from "../../game/actions/serve-customer";
import { ActionCreator } from "@reduxjs/toolkit";
import { AppThunk } from "..";

const addStaffMember: ActionCreator<AppThunk> = () => dispatch => {
  dispatch(addEvent(createServeCustomerAction()));
  dispatch(updateStaffCount(1));
};

export { addStaffMember };
