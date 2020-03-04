import { AdvertisingPackage } from "../types/AdvertisingPackage";

export const advertisingPackageValue: Record<AdvertisingPackage, number> = {
  [AdvertisingPackage.none]: 0,
  [AdvertisingPackage.basic]: 500,
  [AdvertisingPackage.advanced]: 5000
};
