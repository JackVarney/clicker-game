import { ActionCreator } from "@reduxjs/toolkit";
import { AdvertisingPackage } from "../../core/types/AdvertisingPackage";
import { AppThunk } from "..";
import { changeAdvertisingPackage } from "./change-advertising-package";
import { updateScore } from "./update-score";
import { advertisingPackageValue } from "../../core/constants/advertising-package-values";

const selectAdvertisingPackage: ActionCreator<AppThunk> = (
  advertisingPackage: AdvertisingPackage
) => (dispatch, getState) => {
  const {
    game: { score }
  } = getState();

  if (score >= advertisingPackageValue[advertisingPackage]) {
    dispatch(changeAdvertisingPackage(advertisingPackage));
    dispatch(updateScore(-advertisingPackageValue[advertisingPackage]));
  }
};

export { selectAdvertisingPackage };
