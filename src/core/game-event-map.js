import {
  serveCustomerKey,
  serveCustomer,
} from '../store/actions/serve-customer';

/*
    Redux wont store functions.
    Therefore events will be stored as references to the function that needs to be called.
*/

const gameEventMap = {
  [serveCustomerKey]: serveCustomer,
};

export { gameEventMap };
