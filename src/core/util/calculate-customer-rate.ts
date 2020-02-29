import { AdvertisingPackage } from "../types/AdvertisingPackage";

const calculateCustomerRate = (
  rate: number,
  advertisingPackage: AdvertisingPackage
): number =>
  Math.ceil(
    rate *
      {
        [AdvertisingPackage.none]: 1,
        [AdvertisingPackage.basic]: 1.5,
        [AdvertisingPackage.advanced]: 5
      }[advertisingPackage]
  );

export { calculateCustomerRate };
