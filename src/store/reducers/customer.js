import { updateCustomers } from '../actions/update-customers';

const customerInitialState = {
  customers: {
    count: 0,
    rate: 3,
    maxCustomers: 10,
  },
};

const _updateCustomers = (state, { payload }) => {
  const { customers } = state;
  const newCustomerCount = customers.count + payload;
  const newCustomerCountIsNegative = newCustomerCount < 0;
  const newCustomerCountIsLowerThanMaxCustomerCount =
    newCustomerCount <= customers.maxCustomers;

  const count = newCustomerCountIsNegative
    ? 0
    : newCustomerCountIsLowerThanMaxCustomerCount
    ? newCustomerCount
    : customers.maxCustomers;

  return {
    ...state,
    customers: {
      ...customers,
      count,
    },
  };
};

const customerReducer = {
  [updateCustomers.type]: _updateCustomers,
};

export { customerInitialState, customerReducer };
