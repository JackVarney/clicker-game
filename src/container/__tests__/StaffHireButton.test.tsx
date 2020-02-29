import React from "react";
import { useDispatch } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import StaffHireButton from "../StaffHireButton";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn()
}));

const dispatch = jest.fn();
beforeEach(() => {
  jest.resetAllMocks();

  (useDispatch as jest.Mock).mockReturnValue(dispatch);
});

it("should dispatch staff hire event", () => {
  const component = render(<StaffHireButton />);

  fireEvent.click(component.container.firstChild as Element);

  expect(dispatch).toHaveBeenCalledWith(expect.any(Function));
});
