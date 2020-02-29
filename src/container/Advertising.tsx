import React, { FC } from "react";
import Button from "../components/Button";
import { useDispatch } from "../store";
import { selectAdvertisingPackage } from "../store/actions/select-advertising-package";
import { AdvertisingPackage } from "../core/types/AdvertisingPackage";
import { advertisingPackageValue } from "../core/constants/advertising-package-values";

const Advertising: FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div>Advertising</div>
      <Button
        onClick={() => {
          dispatch(selectAdvertisingPackage(AdvertisingPackage.basic));
        }}
      >
        {`Basic package ($${
          advertisingPackageValue[AdvertisingPackage.basic]
        })`}
      </Button>

      <Button
        onClick={() => {
          dispatch(selectAdvertisingPackage(AdvertisingPackage.advanced));
        }}
      >
        {`Advanced package ($${
          advertisingPackageValue[AdvertisingPackage.advanced]
        })`}
      </Button>
    </>
  );
};

export default Advertising;
