import { createReducer } from "@reduxjs/toolkit";
import { addStaffMember } from "../actions/add-staff-member";

const initialState = {
  maxStaff: 5,
  numberOfStaff: 0
};

const staffReducer = createReducer(initialState, {
  [addStaffMember.type](state) {
    const staffCount = state.numberOfStaff + 1;

    return {
      ...state,
      numberOfStaff: staffCount > state.maxStaff ? state.maxStaff : staffCount
    };
  }
});

export { staffReducer };
