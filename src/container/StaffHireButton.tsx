import React from "react";
import { addStaffMember } from "../store/actions/add-staff-member";
import { useDispatch } from "../store";
import Button from "../components/Button";
import { staffHireCost } from "../core/constants/staff-hire-cost";

const StaffHireButton = () => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => {
        dispatch(addStaffMember());
      }}
    >
      {`Hire staff member ($${staffHireCost})`}
    </Button>
  );
};

export default StaffHireButton;
