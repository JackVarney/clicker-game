import { removeStaffMember } from "../remove-staff-member";

it("should dispatch events to add staff member", () => {
  const dispatch = jest.fn();

  removeStaffMember()(dispatch);

  expect(dispatch).toHaveBeenNthCalledWith(1, {
    type: "REMOVE_EVENT",
    payload: "SERVE_CUSTOMER"
  });

  expect(dispatch).toHaveBeenNthCalledWith(2, {
    type: "UPDATE_STAFF_COUNT",
    payload: 1
  });
});