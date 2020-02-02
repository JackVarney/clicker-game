import { GameEvent } from "../core/types/GameEvent";
import { AnyAction } from "@reduxjs/toolkit";

const createGameAction = (
  name: string,
  actions: string[] | AnyAction[] = []
) => (limit = Infinity): GameEvent => ({
  name,
  actions,
  limit
});

export { createGameAction };
