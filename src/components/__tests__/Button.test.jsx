import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import Button from "../Button";

it("renders correctly", () => {
  const tree = renderer
    .create(<Button onClick={() => {}}>Some text</Button>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("should call onClick function when clicked", () => {
  const onClick = jest.fn();
  const component = render(<Button onClick={onClick}>Some text</Button>);

  fireEvent.click(component.container.firstChild);

  expect(onClick).toHaveBeenCalled();
});
