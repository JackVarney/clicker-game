import React from "react";
import { useDispatch } from "react-redux";
import { removeStaffMember } from "../store/actions/remove-staff-member";
import Button from "../components/Button";

const StaffFireButton = () => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => {
        dispatch(removeStaffMember());
      }}
    >
      Fire staff member
    </Button>
  );
};

export default StaffFireButton;
