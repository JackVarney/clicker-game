import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStaffMember } from "../store/actions/add-staff-member";
import { updateScore } from "../store/actions/update-score";
import { addEvent } from "../store/actions/add-event";
import { createServeCustomerEvent } from "../core/events/serve-customer";
import Button from "../components/Button";

const StaffHireButton = () => {
  const dispatch = useDispatch();
  const score = useSelector(state => state.game.score);

  return (
    <Button
      onClick={() => {
        if (score >= 50) {
          dispatch(updateScore(-50));
          dispatch(addStaffMember());
          dispatch(addEvent(createServeCustomerEvent()));
        }
      }}
    >
      Hire staff member
    </Button>
  );
};

export default StaffHireButton;
