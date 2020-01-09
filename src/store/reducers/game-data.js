import { createReducer } from '@reduxjs/toolkit';
import { customerInitialState, customerReducer } from './customer';
import { scoreInitialState, scoreReducer } from './score';
import { staffInitialState, staffReducer } from './staff';

const gameDataReducer = createReducer(
  {
    ...customerInitialState,
    ...scoreInitialState,
    ...staffInitialState,
  },
  {
    ...customerReducer,
    ...scoreReducer,
    ...staffReducer,
  },
);

export { gameDataReducer };
