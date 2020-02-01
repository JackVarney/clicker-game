import { addEvent } from "./add-event";
import { updateStaffCount } from "./update-staff-count";
import { createServeCustomerAction } from "../../game/actions/serve-customer";

const addStaffMember = () => dispatch => {
  dispatch(addEvent(createServeCustomerAction()));
  dispatch(updateStaffCount(1));
};

export { addStaffMember };
