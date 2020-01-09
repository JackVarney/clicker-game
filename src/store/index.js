import { configureStore } from '@reduxjs/toolkit';
import { scoreReducer } from './reducers/score';
import { staffReducer } from './reducers/staff';
import { customersReducer } from './reducers/customers';
import { eventsReducer } from './reducers/events';

const createStore = () =>
  new Proxy(
    configureStore({
      reducer: {
        score: scoreReducer,
        customers: customersReducer,
        staff: staffReducer,
        events: eventsReducer,
      },
    }),
    {
      /* 
        bind each function on the store to the store
      */
      get(target, prop) {
        return typeof target[prop] === 'function'
          ? target[prop].bind(target)
          : target[prop];
      },
    },
  );

/*
      Hack so that the store can be reset during testing 
*/
let store;
let dispatch;
let getState;

const resetStore = () => {
  store = createStore();
  dispatch = store.dispatch;
  getState = store.getState;
};
resetStore();

export { store, dispatch, getState, resetStore };
