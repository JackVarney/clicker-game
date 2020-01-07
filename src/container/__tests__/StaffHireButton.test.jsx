import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import StaffHireButton from "../StaffHireButton";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn()
}));

jest.fn().mockReturnValueOnce;

const dispatch = jest.fn();
beforeEach(() => {
  jest.resetAllMocks();

  useDispatch.mockReturnValue(dispatch);
});

it("should hire a staff member if score is greater than or equal 50", () => {
  useSelector.mockReturnValueOnce(50);

  const component = render(<StaffHireButton />);

  fireEvent.click(component.container.firstChild);

  expect(dispatch).toHaveBeenCalledWith({
    payload: -50,
    type: "UPDATE_SCORE"
  });

  expect(dispatch).toHaveBeenCalledWith({
    type: "ADD_STAFF_MEMBER"
  });
});

it("should not hire a staff member if score is less than 50", () => {
  useSelector.mockReturnValueOnce(49);

  const component = render(<StaffHireButton />);

  fireEvent.click(component.container.firstChild);

  expect(dispatch).toHaveBeenCalledTimes(0);
});
