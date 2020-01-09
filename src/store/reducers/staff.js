import { addStaffMember } from '../actions/add-staff-member';

const staffInitialState = {
  rate: 3,
  maxStaff: 5,
  numberOfStaff: 0,
};

const _addStaffMember = state => {
  const staffCount = state.numberOfStaff + 1;

  return {
    ...state,
    numberOfStaff: staffCount > state.maxStaff ? state.maxStaff : staffCount,
  };
};

const staffReducer = {
  [addStaffMember.type]: _addStaffMember,
};

export { staffInitialState, staffReducer };
