import { createAction } from "@reduxjs/toolkit";

const updateCustomers = createAction<number>("UPDATE_CUSTOMERS");

export { updateCustomers };
