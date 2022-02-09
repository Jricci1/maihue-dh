/**
 * @typedef {Object} ScoreBoardStoreState The state of a the score board store
 * @property {Object {key: String: Any}} participants Object with the active tournamet participants
 * and their information. The object keys are the participant IDs and the values are the participants.
 * @property {Object {key: String: Stirng}} participants.time Participants time (score) on the race.
 */

/**
 * The state of the store's module related to the active tournament score board.
 *
 * @type {() => ScoreBoardStoreState}
 */
export default () => ({
  participants: {},
});
