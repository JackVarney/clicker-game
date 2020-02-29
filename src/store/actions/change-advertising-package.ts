import { createAction } from "@reduxjs/toolkit";
import { AdvertisingPackage } from "../../core/types/AdvertisingPackage";

const changeAdvertisingPackage = createAction<AdvertisingPackage>(
  "CHANGE_ADVERTISING_PACKAGE"
);

export { changeAdvertisingPackage };
