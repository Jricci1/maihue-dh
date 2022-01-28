/**
 * A module of providers store with the mutations to modify the state of the
 * race store.
 */

/**
 * Set the hot seat participant ID.
 *
 * @param {Object} state The state of the race module.
 * @param {Object} participantId The ID of the hot seat participant.
 */
const setHotSeat = (state, participantId) => {
  state.hotSeatParticipantId = participantId;
};

/**
 * Set the challenger participant ID.
 *
 * @param {Object} state The state of the race module.
 * @param {Object} participantId The ID of the hot seat challenger participant.
 */
const setRiderSeat = (state, participantId) => {
  state.riderParticipantId = participantId;
};

export default {
  setHotSeat,
  setRiderSeat,
};
