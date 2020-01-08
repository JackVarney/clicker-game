import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStaffMember } from "../store/actions/add-staff-member";
import { updateScore } from "../store/actions/update-score";
import { addEvent } from "../store/actions/add-event";
import { updateCustomers } from "../store/actions/update-customers";
import { createGameEvent } from "../core/create-game-event";
import Button from "../components/Button";

const StaffHireButton = () => {
  const dispatch = useDispatch();
  const score = useSelector(state => state.score);

  return (
    <Button
      onClick={() => {
        if (score >= 50) {
          dispatch(updateScore(-50));
          dispatch(addStaffMember());

          const event = createGameEvent([updateCustomers(-1), updateScore(+5)]);
          dispatch(addEvent(event));
        }
      }}
    >
      Hire staff member
    </Button>
  );
};

export default StaffHireButton;
