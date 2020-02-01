import "jest-styled-components";
import React from "react";
import renderer from "react-test-renderer";
import Number from "../Number";

it("it should render label when label is passed", () => {
  const tree = renderer.create(<Number label={"label"}>{0}</Number>).toJSON();

  expect(tree).toMatchSnapshot();
});

it("should render no label when no label passed", () => {
  const tree = renderer.create(<Number>{0}</Number>).toJSON();

  expect(tree).toMatchSnapshot();
});
