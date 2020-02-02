import {
  configureStore,
  Store,
  Dispatch,
  EnhancedStore,
  Action
} from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import {
  useSelector as _useSelector,
  TypedUseSelectorHook,
  useDispatch
} from "react-redux";
import { scoreReducer } from "./reducers/score";
import { staffReducer } from "./reducers/staff";
import { gameDataReducer } from "./reducers/game";
import { eventsReducer } from "./reducers/events";
import { RootState } from "../core/types/RootState";

const createStore = () =>
  new Proxy(
    configureStore<RootState>({
      reducer: {
        score: scoreReducer,
        game: gameDataReducer,
        staff: staffReducer,
        events: eventsReducer
      } as any
    }),
    {
      /* 
        bind each function on the store to the store
      */
      get(target: EnhancedStore<any>, prop: keyof EnhancedStore) {
        return typeof target[prop] === "function"
          ? target[prop].bind(target)
          : target[prop];
      }
    }
  );

/*
      Hack so that the store can be reset during testing 
*/
let store: Store;
let dispatch: Dispatch;
let getState: () => RootState;

const resetStore = () => {
  store = createStore();
  dispatch = store.dispatch;
  getState = store.getState;
};
resetStore();

const useSelector: TypedUseSelectorHook<RootState> = _useSelector;

export type AppDispatch = typeof dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export { store, dispatch, getState, resetStore, useSelector, useDispatch };
