import React from "react";
import { useSelector } from "react-redux";
import StaffHireButton from "./StaffHireButton";
import Number from "../components/Number";

const Staff = () => {
  const staffCount = useSelector(state => state.staff.numberOfStaff);

  return (
    <div>
      <Number label={"Staff count"}>{staffCount}</Number>
      <StaffHireButton />
    </div>
  );
};

export default Staff;
