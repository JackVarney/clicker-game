import { removeStaffMember } from "../remove-staff-member";

it("should dispatch events to add staff member", () => {
  const dispatch = jest.fn();

  removeStaffMember()(dispatch, () => ({ game: { numberOfStaff: 1 } }));

  expect(dispatch).toHaveBeenNthCalledWith(1, {
    type: "REMOVE_EVENT",
    payload: "SERVE_CUSTOMER"
  });
});

it("should do nothing if 0 staff", () => {
  const dispatch = jest.fn();

  removeStaffMember()(dispatch, () => ({ game: { numberOfStaff: 0 } }));

  expect(dispatch).not.toHaveBeenCalled();
});
