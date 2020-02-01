import React from "react";
import { addStaffMember } from "../store/actions/add-staff-member";
import { updateScore } from "../store/actions/update-score";
import { useSelector, useDispatch } from "../core/typed-react-redux";
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
        }
      }}
    >
      Hire staff member
    </Button>
  );
};

export default StaffHireButton;
