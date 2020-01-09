const gameEvents = {
  staffMember: 'STAFF_MEMBER',
};

const createGameEvent = name => (actions = [], limit = Infinity) => ({
  name,
  actions,
  limit,
});

const createStaffEvent = createGameEvent(gameEvents.staffMember);

export { gameEvents, createGameEvent, createStaffEvent };
