import { gameDataReducer, GameState } from "../game";
import { changeAdvertisingPackage } from "../../actions/change-advertising-package";
import { AdvertisingPackage } from "../../../core/types/AdvertisingPackage";

it("should change the advertising package", () => {
  const result = gameDataReducer(
    {
      advertisingPackage: AdvertisingPackage.none
    } as GameState,
    changeAdvertisingPackage(AdvertisingPackage.basic)
  );

  expect(result.advertisingPackage).toEqual(AdvertisingPackage.basic);
});
