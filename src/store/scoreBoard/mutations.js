/**
 * A module of providers store with the mutations to modify the state of the
 * score board.
 */

import { generateUUID } from "~/utils";
import Vue from "vue";

/**
 * Add a new participant to the score board. It takes the newParticipant object from
 * the given state, creates a random ID and adds it to:
 * - The participants object of the given state
 * - The participantsOrder array of the given state
 *
 * Check the state documentation for more details about it.
 *
 * @param {Object} state The state of the scoreBoard module.
 */
const addParticipant = (state, newParticipant) => {
  const newParticipantId = generateUUID();
  Vue.set(state.participants, newParticipantId, {
    ...newParticipant,
    id: newParticipantId,
  });
  state.participantsOrder.push(newParticipantId);
};

const setRiderTime = (state, { riderId, time }) => {
  Vue.set(state.participants[riderId], "time", time);
};

const sortParticpants = (state) => {
  state.participantsOrder.sort((a, b) => {
    // a < b => -1
    // a > b => 1
    // a == b => 0
    if (!state.participants[a].time) {
      // In this case, "b" is grather than "a" because is after in the array
      return 1;
    }
    if (!state.participants[b].time) {
      // In this case, "a" is grather than "b" because it does not have time
      return -1;
    }
    // It is not neccesary to have equal values, so if "a" is greater than or equa to "b", "a"
    // is returned as the bigger elemente of the comparision
    return state.participants[b].time > state.participants[a].time ? -1 : 1;
  });
};

export default {
  addParticipant,
  setRiderTime,
  sortParticpants,
};
