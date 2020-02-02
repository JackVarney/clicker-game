import { GameEvent } from "./GameEvent";
import { CustomerState } from "./CustomerState";

export interface RootState {
  game: {
    score: number;
    numberOfStaff: number;
    customers: CustomerState;
  };
  events: GameEvent[];
}
