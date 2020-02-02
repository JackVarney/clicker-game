import {
  serveCustomerFunctionKey,
  serveCustomer
} from "./actions/serve-customer";
import { AppThunk } from "../core/redux";

/*
    Redux wont store functions.
    Therefore events will be stored as references to the function that needs to be called.
*/

export interface GameEventMap {
  [serveCustomerFunctionKey]: AppThunk;
}

const gameEventMap: GameEventMap = {
  [serveCustomerFunctionKey]: serveCustomer
};

export { gameEventMap };
