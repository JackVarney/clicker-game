import {
  useSelector as _useSelector,
  TypedUseSelectorHook,
  useDispatch
} from "react-redux";
import { RootState } from "./types/RootState";

const useSelector: TypedUseSelectorHook<RootState> = _useSelector;

export { useSelector, useDispatch };
