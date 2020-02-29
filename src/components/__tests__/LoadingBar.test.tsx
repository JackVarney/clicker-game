import React from "react";
import { render } from "@testing-library/react";
import LoadingBar from "../LoadingBar";

it("should render to passed percentage", () => {
  const component = render(<LoadingBar percent={100} />);

  const style = window.getComputedStyle(
    component.container.firstChild! as Element
  );

  expect(style.width).toEqual("100%");
});
