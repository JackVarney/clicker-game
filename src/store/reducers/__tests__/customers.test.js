import { customersReducer } from "../customers";
import { updateCustomers } from "../../actions/update-customers";

it("should revert to default", () => {
  const response = customersReducer({ count: 0, rate: 0 }, {});

  expect(response).toEqual({ count: 0, rate: 0 });
});

it("should add a customer", () => {
  const result = customersReducer({ count: 0 }, updateCustomers(1));

  expect(result.count).toEqual(1);
});

it("should remove a customer", () => {
  const result = customersReducer({ count: 1 }, updateCustomers(-1));

  expect(result.count).toEqual(0);
});
