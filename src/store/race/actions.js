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
const setRider = ({ rootState, commit, dispatch }, riderId) => {
  const scoreBoardStore = rootState.scoreBoard;
  const riderCategory = scoreBoardStore.participants[riderId].category;

  dispatch("setHotSeatRider", { riderCategory });
  commit("setRiderSeat", riderId);
};

/**
 * sets the hot seat rider from the corresponding category of
 * the challenger rider.
 *
 *
 * @param {Object} state The state of the formulas module.
 * @param {Object} state.rootState The root state of the vuex store with access to other modules.
 * @param {Object} state.commit The function for calling the state mutations.
 */
const setHotSeatRider = ({ rootState, commit }, { riderCategory }) => {
  const scoreBoardStore = rootState.scoreBoard;
  const hotSeatRider = scoreBoardStore.participantsOrder.find(
    (participanId) => {
      const potentialHotSeat = scoreBoardStore.participants[participanId];
      if (!potentialHotSeat.time) {
        return false;
      }
      if (potentialHotSeat.category != riderCategory) {
        return false;
      }
      return true;
    }
  );
  commit("setHotSeat", hotSeatRider);
};

/**
 * Add the race time to the rider. After set the time, participantsOrder is sort
 * with  the new time of the rider.
 *
 * Check the state documentation for more details about it.
 * @param {Object} state The state of the formulas module.
 * @param {Object} commit The function for calling the state mutations.
 * @param {string} time Time did by the rider.
 */
const setRiderTime = ({ state, commit }, time) => {
  commit(
    "scoreBoard/setRiderTime",
    {
      riderId: state.riderParticipantId,
      time,
    },
    { root: true }
  );
  commit(
    "scoreBoard/sortParticpants",
    {
      riderId: state.riderParticipantId,
      time,
    },
    { root: true }
  );
};

export default {
  setRider,
  setRiderTime,
  setHotSeatRider,
};
