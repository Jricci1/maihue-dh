/**
 * A module of providers store with the mutations to modify the state of the
 * race.
 */

/**
 * Set the challenger rider using the rider index from the scoreBoard table.
 * With it, also sets the hot seat rider from the corresponding category of
 * the challenger rider.
 *
 * Both participan IDs gets stored in the 'race' state.
 *
 * @param {Object} state The state of the formulas module.
 * @param {Object} state.rootState The root state of the vuex store with access to other modules.
 * @param {Object} state.commit The function for calling the state mutations.
 */
const setRider = ({ rootState, commit, rootGetters }, riderId) => {
  const scoreBoardStore = rootState.scoreBoard;
  const scoreBoardParticipantsOrder =
    rootGetters["scoreBoard/participantsOrder"];
  const riderCategory = scoreBoardStore.participants[riderId].category;
  const hotSeatRider = scoreBoardParticipantsOrder.find((participanId) => {
    const potentialHotSeat = scoreBoardStore.participants[participanId];
    if (!potentialHotSeat.time) {
      return false;
    }
    if (potentialHotSeat.category != riderCategory) {
      return false;
    }
    return true;
  });
  commit("setHotSeat", hotSeatRider);
  commit("setRiderSeat", riderId);
};

export default {
  setRider,
};
