import { gameDataReducer } from '../game-data';
import { updateScore } from '../../actions/update-score';

it('should revert to default', () => {
  const response = gameDataReducer({ score: 0 }, {});

  expect(response).toEqual({ score: 0 });
});

it('should add to the score', () => {
  const response = gameDataReducer({ score: 0 }, updateScore(1));

  expect(response).toEqual({ score: 1 });
});

it('should subtract to the score', () => {
  const response = gameDataReducer({ score: 1 }, updateScore(-1));

  expect(response).toEqual({ score: 0 });
});
