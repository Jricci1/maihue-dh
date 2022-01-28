/**
 * A module of providers store with the getters to get computed data from the race state.
 */

/**
 * Maps the hot deat rider id from the `scoreBoard` state participants attribute.
 *
 * @param {Object} state The actual state of the store.
 * @param {Object} getters The actual getters of the store.
 * @param {Object} rootState The root state of the vuex store with access to other modules.
 * @returns The selected hot seat participant object.
 */
const hotSeatRider = (state, getters, rootState) => {
  return rootState.scoreBoard.participants[state.hotSeatParticipantId];
};

/**
 * Maps the challenger rider id from the `scoreBoard` state participants attribute.
 *
 * @param {Object} state The actual state of the store.
 * @param {Object} getters The actual getters of the store.
 * @param {Object} rootState The root state of the vuex store with access to other modules.
 * @returns The selected challenger participant object.
 */
const challengerRider = (state, getters, rootState) => {
  return rootState.scoreBoard.participants[state.riderParticipantId];
};

export default {
  hotSeatRider,
  challengerRider,
};
