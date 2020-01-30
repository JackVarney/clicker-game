import { addEvent } from "./add-event";
import { updateStaffCount } from "./update-staff-count";
import { serveCustomerFunctionKey } from "../../core/events/serve-customer";
import { createGameEvent } from "../../core/create-game-event";
import { updateScore } from "./update-score";
import { updateCustomers } from "./update-customers";

const addStaffMember = () => (dispatch, getState) => {
  dispatch(
    addEvent(
      createGameEvent(serveCustomerFunctionKey)([
        updateScore(5),
        updateCustomers(-1)
      ])
    )
  );

  dispatch(updateStaffCount(1));
};

export { addStaffMember };
