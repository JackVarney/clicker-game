import React from "react";
import { useDispatch } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import StaffFireButton from "../StaffFireButton";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn()
}));

const dispatch = jest.fn();
beforeEach(() => {
  jest.resetAllMocks();

  (useDispatch as jest.Mock).mockReturnValue(dispatch);
});

it("should dispatch a fire staff member event when clicked", () => {
  const component = render(<StaffFireButton></StaffFireButton>);

  fireEvent.click(component.container.firstChild as HTMLElement);

  expect(dispatch).toHaveBeenCalledWith(expect.any(Function));
});
