import { GameAction } from "./GameAction";

export interface GameEvent {
  name: string;
  actions: GameAction[];
  limit: number;
}

export enum GameEventKey {
  serveCustomer = "SERVE_CUSTOMER",
  updateCustomer = "UPDATE_CUSTOMER"
}
