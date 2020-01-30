import { updateStaffCount } from "../actions/update-staff-count";

const staffInitialState = {
  rate: 3,
  maxStaff: 5,
  numberOfStaff: 0
};

const _updateStaffCount = (state, { payload }) => {
  const staffCount = state.numberOfStaff + payload;

  return {
    ...state,
    numberOfStaff: staffCount > state.maxStaff ? state.maxStaff : staffCount
  };
};

const staffReducer = {
  [updateStaffCount.type]: _updateStaffCount
};

export { staffInitialState, staffReducer };
