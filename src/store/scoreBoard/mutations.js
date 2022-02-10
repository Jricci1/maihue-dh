/**
 * A module of providers store with the mutations to modify the state of the
 * score board.
 */
import Vue from "vue";
import { generateUUID } from "~/utils";

/**
 * Add a new participant to the score board. It takes the newParticipant object from
 * the given state, creates a random ID and adds it to:
 * - The participants object of the given state
 * - The participantsOrder array of the given state
 *
 * Check the state documentation for more details about it.
 *
 * @param {Object} state The state of the scoreBoard module.
 * @param {Object} newParticipant The participant to add.
 */
const addParticipant = (state, newParticipant) => {
  const newParticipantId = generateUUID();
  state.participants = {
    ...state.participants,
    [newParticipantId]: { ...newParticipant, id: newParticipantId },
  };
};

/**
 * Add participant's time into the score board.
 *
 * @param {Object} state The state of the scoreBoard module.
 * @param {Object} payload
 * @param {Object} payload.participantId The ID of the participant to set the time.
 * @param {Object} payload.time The time to add to the participant.
 */
const addParticipantTime = (state, { participantId, time }) => {
  state.participants[participantId].time = time;
};

/**
 * Delete participant from the score board.
 *
 * @param {Object} state The state of the scoreBoard module.
 */
const deleteParticipant = (state, { participantId }) => {
  Vue.delete(state.participants, participantId);
};

export default {
  addParticipant,
  addParticipantTime,
  deleteParticipant,
};
