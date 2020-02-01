export interface RootState {
  game: {
    score: number;
    numberOfStaff: number;
    customers: {
      count: number;
    };
  };
}
