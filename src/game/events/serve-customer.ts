import { createGameEvent } from "../create-game-event";
import { GameEventKey } from "../../core/types/GameEvent";

const serveCustomerFunctionKey = GameEventKey.serveCustomer;
const createServeCustomerAction = createGameEvent(serveCustomerFunctionKey, [
  { key: serveCustomerFunctionKey, arguments: [] }
]);

export { serveCustomerFunctionKey, createServeCustomerAction };
