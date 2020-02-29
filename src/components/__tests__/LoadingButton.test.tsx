import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  waitForDomChange
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import LoadingButton from "../LoadingButton";

beforeEach(() => {
  jest.spyOn(window, "requestAnimationFrame").mockImplementation(cb => {
    setTimeout(cb, 100);
    return 0;
  });
});

afterEach(() => {
  (window.requestAnimationFrame as jest.Mock).mockRestore();
});

it("should fire onClick event when clicked", () => {
  const onClick = jest.fn();
  const component = render(
    <LoadingButton onClick={onClick}>Some text</LoadingButton>
  );

  fireEvent.click(component.queryAllByText("Some text")![0]);

  expect(onClick).toHaveBeenCalled();
});

it("should progress the loading bar when clicked", async () => {
  const component = render(
    <LoadingButton onClick={() => {}}>Some text</LoadingButton>
  );

  const loadingBar = component.container.firstChild!.childNodes[1];
  const getStyles = () => window.getComputedStyle(loadingBar as Element);

  expect(getStyles().width).toEqual("0%");

  fireEvent.click(component.queryAllByText("Some text")![0]);

  expect(getStyles().width).toEqual("100%");
});
