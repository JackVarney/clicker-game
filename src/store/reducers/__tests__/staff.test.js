import { gameDataReducer } from "../game";
import { updateStaffCount } from "../../actions/update-staff-count";

it("should revert to default", () => {
  const response = gameDataReducer({ maxStaff: 0, numberOfStaff: 0 }, {});

  expect(response).toEqual({ maxStaff: 0, numberOfStaff: 0 });
});

it("should add a staff member", () => {
  const response = gameDataReducer(
    { maxStaff: 1, numberOfStaff: 0 },
    updateStaffCount(1)
  );

  expect(response).toEqual({ maxStaff: 1, numberOfStaff: 1 });
});

it("should not add a staff member if number of staff is equal to max staff", () => {
  const response = gameDataReducer(
    { maxStaff: 0, numberOfStaff: 0 },
    updateStaffCount(1)
  );

  expect(response).toEqual({ maxStaff: 0, numberOfStaff: 0 });
});

it("should remove a staff member", () => {
  const response = gameDataReducer(
    { maxStaff: 1, numberOfStaff: 1 },
    updateStaffCount(-1)
  );

  expect(response).toEqual({ maxStaff: 1, numberOfStaff: 0 });
});
