import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import StaffHireButton from "../StaffHireButton";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn()
}));

const dispatch = jest.fn();
beforeEach(() => {
  jest.resetAllMocks();

  (useDispatch as jest.Mock).mockReturnValue(dispatch);
});

it("should hire a staff member if score is greater than or equal 50", () => {
  (useSelector as jest.Mock).mockReturnValueOnce(50);

  const component = render(<StaffHireButton />);

  fireEvent.click(component.container.firstChild as Element);

  expect(dispatch).toHaveBeenCalled();
});

it("should not hire a staff member if score is less than 50", () => {
  (useSelector as jest.Mock).mockReturnValueOnce(49);

  const component = render(<StaffHireButton />);

  fireEvent.click(component.container.firstChild as Element);

  expect(dispatch).toHaveBeenCalledTimes(0);
});
