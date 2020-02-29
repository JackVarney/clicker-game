import React from "react";
import { useSelector } from "react-redux";
import { render } from "@testing-library/react";
import Shop from "../Shop";
import { AdvertisingPackage } from "../../core/types/AdvertisingPackage";

jest.mock("react-redux", () => ({
  useSelector: jest.fn()
}));

beforeEach(() => {
  (useSelector as jest.Mock).mockReturnValueOnce(AdvertisingPackage.none);
  (useSelector as jest.Mock).mockReturnValueOnce(1);
  (useSelector as jest.Mock).mockReturnValueOnce(2);
  (useSelector as jest.Mock).mockReturnValueOnce(3);
  (useSelector as jest.Mock).mockReturnValueOnce(4);
});

it("should display shop data", () => {
  const component = render(<Shop />);

  expect(component.queryByText("Cash: 3")).toBeInTheDocument();
  expect(component.queryByText("Customers: 4")).toBeInTheDocument();
  expect(component.queryByText("New daily customers: 1")).toBeInTheDocument();
  expect(component.queryByText("Max customers: 2")).toBeInTheDocument();
});
