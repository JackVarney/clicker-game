import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import StaffFireButton from "../StaffFireButton";

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

it("should dispatch a fire staff member event when clicked", () => {});
