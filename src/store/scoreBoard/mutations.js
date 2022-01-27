/**
 * A module of providers store with the mutations to modify the state of the
 * score board.
 */

import { generateUUID } from "~/utils";

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
  state.participants[newParticipantId] = {
    ...newParticipant,
    id: newParticipantId,
  };
  state.participantsOrder.push(newParticipantId);
};

export default {
  addParticipant,
};
