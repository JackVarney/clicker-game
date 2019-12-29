import "jest-styled-components";
import React from "react";
import renderer from "react-test-renderer";
import Number from "../Number";

it("renders correctly", () => {
  const tree = renderer.create(<Number label={"label"}>{0}</Number>).toJSON();

  expect(tree).toMatchSnapshot();
});
