import { updateScore } from '../actions/update-score';

const scoreInitialState = { score: 0 };

const _updateScore = (state, action) => ({
  ...state,
  score: state.score + action.payload,
});

const scoreReducer = {
  [updateScore.type]: _updateScore,
};

export { scoreInitialState, scoreReducer };
