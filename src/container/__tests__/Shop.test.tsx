import React from "react";
import { useSelector } from "react-redux";
import { render } from "@testing-library/react";
import Shop from "../Shop";

jest.mock("react-redux", () => ({
  useSelector: jest.fn()
}));

it("should display the rate of new customers", () => {
  (useSelector as jest.Mock).mockReturnValueOnce(3);

  const component = render(<Shop />);

  expect(component.queryByText("New customer rate: 3")).toBeInTheDocument();
});
