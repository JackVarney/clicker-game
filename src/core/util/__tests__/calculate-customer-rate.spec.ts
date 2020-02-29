import { calculateCustomerRate } from "../calculate-customer-rate";
import { AdvertisingPackage } from "../../types/AdvertisingPackage";

it("should calulate the correct rate when no package", () => {
  const result = calculateCustomerRate(3, AdvertisingPackage.none);

  expect(result).toEqual(3);
});

it("should calculate the basic rate", () => {
  const result = calculateCustomerRate(4, AdvertisingPackage.basic);

  expect(result).toEqual(6);
});

it("should round up", () => {
  const result = calculateCustomerRate(3, AdvertisingPackage.basic);

  expect(result).toEqual(5);
});
