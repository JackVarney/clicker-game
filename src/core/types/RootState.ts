import { GameEvent } from "./GameEvent";

export interface RootState {
  game: {
    score: number;
    numberOfStaff: number;
    customers: {
      count: number;
      rate: number;
    };
  };
  events: GameEvent[];
}
