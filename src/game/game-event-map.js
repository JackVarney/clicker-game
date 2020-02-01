import {
  serveCustomerFunctionKey,
  serveCustomer
} from "./actions/serve-customer";

/*
    Redux wont store functions.
    Therefore events will be stored as references to the function that needs to be called.
*/

const gameEventMap = {
  [serveCustomerFunctionKey]: serveCustomer
};

export { gameEventMap };
