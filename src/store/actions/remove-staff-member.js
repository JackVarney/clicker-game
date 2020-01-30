import { removeEvent } from "./remove-event";
import { updateStaffCount } from "./update-staff-count";
import { serveCustomerFunctionKey } from "../../core/events/serve-customer";

const removeStaffMember = dispatch => {
  dispatch(removeEvent(serveCustomerFunctionKey));
  dispatch(updateStaffCount(-1));
};

export { removeStaffMember };
