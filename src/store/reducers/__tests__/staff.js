import { staffReducer } from "../staff";
import { addStaffMember } from "../../actions/add-staff-member";

it("should revert to default", () => {
  const response = staffReducer({ maxStaff: 0, numberOfStaff: 0 }, {});

  expect(response).toEqual({ maxStaff: 0, numberOfStaff: 0 });
});

it("should add a staff member", () => {
  const response = staffReducer(
    { maxStaff: 1, numberOfStaff: 0 },
    addStaffMember()
  );

  expect(response).toEqual({ maxStaff: 1, numberOfStaff: 1 });
});

it("should not add a staff member if number of staff is equal to max staff", () => {
  const response = staffReducer(
    { maxStaff: 0, numberOfStaff: 0 },
    addStaffMember()
  );

  expect(response).toEqual({ maxStaff: 0, numberOfStaff: 0 });
});
