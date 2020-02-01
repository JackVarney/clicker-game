const createGameEvent = name => (actions = [], limit = Infinity) => ({
  name,
  actions,
  limit
});

export { createGameEvent };
