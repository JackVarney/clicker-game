import { scoreReducer } from "../score";
import { updateScore } from "../../actions/update-score";

it("should revert to default", () => {
  const response = scoreReducer(0, {});

  expect(response).toEqual(0);
});

it("should add to the score", () => {
  const response = scoreReducer(0, {
    type: updateScore.type,
    value: 1
  });

  expect(response).toEqual(1);
});

it("should subtract to the score", () => {
  const response = scoreReducer(1, {
    type: updateScore.type,
    value: -1
  });

  expect(response).toEqual(0);
});
