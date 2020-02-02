import { createGameEvent } from "../create-game-event";
import { GameEventKey } from "../../core/types/GameEvent";

const updateCustomersFunctionKey = GameEventKey.updateCustomer;
const createUpdateCustomersAction = (rate: number, limit = Infinity) =>
  createGameEvent(updateCustomersFunctionKey, [
    { key: updateCustomersFunctionKey, arguments: [rate] }
  ])(limit);

export { updateCustomersFunctionKey, createUpdateCustomersAction };
