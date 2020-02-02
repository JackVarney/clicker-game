import { serveCustomer } from "../store/actions/serve-customer";
import { GameEventKey } from "../core/types/GameEvent";
import { updateCustomers } from "../store/actions/update-customers";

/*
    Redux wont store functions.
    Therefore events will be stored as references to the function that needs to be called.
*/

const gameEventMap = {
  [GameEventKey.serveCustomer]: serveCustomer,
  [GameEventKey.updateCustomer]: updateCustomers
};

export { gameEventMap };
