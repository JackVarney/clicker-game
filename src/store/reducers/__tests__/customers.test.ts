import { gameDataReducer } from "../game";
import { updateCustomers } from "../../actions/update-customers";

it("should revert to default", () => {
  const response = gameDataReducer({ customers: { count: 0 } }, {});

  expect(response).toEqual({ customers: { count: 0 } });
});

it("should add a customer", () => {
  const result = gameDataReducer(
    { customers: { count: 0, maxCustomers: 10 } },
    updateCustomers(1)
  );

  expect(result.customers.count).toEqual(1);
});

it("should remove a customer", () => {
  const result = gameDataReducer(
    { customers: { count: 1, maxCustomers: 10 } },
    updateCustomers(-1)
  );

  expect(result.customers.count).toEqual(0);
});

it("should never have a negative customer number", () => {
  const result = gameDataReducer(
    { customers: { count: 0 } },
    updateCustomers(-1)
  );

  expect(result.customers.count).toEqual(0);
});

it("should never exceed maximum customer count", () => {
  const result = gameDataReducer(
    { customers: { count: 0 } },
    updateCustomers(-1)
  );

  expect(result.customers.count).toEqual(0);
});
