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
 * @param {Object} state The state of the formulas module.
 */
const addParticipant = (state, newParticipant) => {
  const newParticipantId = generateUUID();
  Vue.set(state.participants, newParticipantId, {
    ...newParticipant,
    id: newParticipantId,
  });
  state.participantsOrder.push(newParticipantId);
};

const addRider = (state, newRider) => {
  if (!state.ongoingRace) {
    state.currentRider = newRider;
  }
};

const setOngoingRace = (state, status) => {
  state.ongoingRace = status;
};

const setRiderRaceTime = (state, time) => {
  console.log(time);
  state.currentRider.time = time;
};

export default {
  addParticipant,
  addRider,
  setOngoingRace,
  setRiderRaceTime,
};
