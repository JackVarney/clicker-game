import { addStaffMember } from "../add-staff-member";

it("should dispatch events to add staff member", () => {
  const dispatch = jest.fn();

  addStaffMember()(dispatch, () => ({
    game: {
      score: 50
    }
  }));

  expect(dispatch).toHaveBeenCalledWith({
    type: "ADD_EVENT",
    payload: {
      actions: [
        {
          key: "SERVE_CUSTOMER",
          arguments: []
        }
      ],
      limit: Infinity,
      name: "SERVE_CUSTOMER"
    }
  });

  expect(dispatch).toHaveBeenCalledWith({
    type: "UPDATE_STAFF_COUNT",
    payload: 1
  });

  expect(dispatch).toHaveBeenCalledWith({
    type: "UPDATE_SCORE",
    payload: -50
  });
});

it("should not dispatch if cant afford to hire new staff member", () => {
  const dispatch = jest.fn();

  addStaffMember()(dispatch, () => ({
    game: {
      score: 49
    }
  }));

  expect(dispatch).not.toHaveBeenCalled();
});
