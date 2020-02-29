import { selectAdvertisingPackage } from "../select-advertising-package";
import { AdvertisingPackage } from "../../../core/types/AdvertisingPackage";
import { RootState } from "../..";
import { changeAdvertisingPackage } from "../change-advertising-package";
import { updateScore } from "../update-score";

it("should not do anything if cant afford package", () => {
  const dispatch = jest.fn();

  selectAdvertisingPackage(AdvertisingPackage.basic)(
    dispatch,
    () =>
      ({
        game: { score: 499 }
      } as RootState),
    null
  );

  expect(dispatch).not.toHaveBeenCalled();
});

it("should dispatch events if valid package choice", () => {
  const dispatch = jest.fn();

  selectAdvertisingPackage(AdvertisingPackage.basic)(
    dispatch,
    () =>
      ({
        game: { score: 500 }
      } as RootState),
    null
  );

  expect(dispatch).toHaveBeenCalledWith(updateScore(-500));
  expect(dispatch).toHaveBeenCalledWith(
    changeAdvertisingPackage(AdvertisingPackage.basic)
  );
});
