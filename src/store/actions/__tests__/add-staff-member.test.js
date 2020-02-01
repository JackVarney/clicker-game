import { addStaffMember } from "../add-staff-member";

it("should dispatch events to add staff member", () => {
  const dispatch = jest.fn();

  addStaffMember()(dispatch);

  expect(dispatch).toHaveBeenNthCalledWith(1, {
    type: "ADD_EVENT",
    payload: {
      actions: ["SERVE_CUSTOMER"],
      limit: Infinity,
      name: "SERVE_CUSTOMER"
    }
  });

  expect(dispatch).toHaveBeenNthCalledWith(2, {
    type: "UPDATE_STAFF_COUNT",
    payload: 1
  });
});
