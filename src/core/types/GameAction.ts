import { GameEventKey } from "./GameEvent";

export interface GameAction {
  key: GameEventKey;
  arguments: any[];
}
