/**
 * @typedef {Object} RaceStoreState The state of a the current race store
 * @property {String} hotSeatParticipantId ID of the hot seat player for the compiting category.
 * @property {String} riderParticipantId ID of the rider to challenge the hot seat player for
 * the compiting category.
 */

/**
 * The state of the store's module related to the active tournament racing participants.
 *
 * @type {() => RaceStoreState}
 */
export default () => ({
  hotSeatParticipantId: null,
  riderParticipantId: null,
});
