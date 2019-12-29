import React from "react";
import renderer from "react-test-renderer";
import Score from "../Score";

it("renders correctly", () => {
  const tree = renderer.create(<Score score={0} />).toJSON();

  expect(tree).toMatchSnapshot();
});
