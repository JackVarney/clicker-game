import React from "react";
import { useSelector, useDispatch } from "../store";
import StaffHireButton from "./StaffHireButton";
import StaffFireButton from "./StaffFireButton";
import Number from "../components/Number";

const Staff = () => {
  const staffCount = useSelector(state => state.game.numberOfStaff);

  return (
    <div>
      <Number label={"Staff count"}>{staffCount}</Number>
      <StaffHireButton />
      <StaffFireButton />
    </div>
  );
};

export default Staff;
