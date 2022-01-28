/**
 * @typedef {Object} ScoreBoardStoreState The state of a the score board store
 * @property {Object {key: String: Object}} participants Object with the active tournamet participants
 * and their information. The object keys are the participant IDs and the values are the participants.
 * @property {Array} participantsOrder List of participant IDs sorted by their order on the scoreboard.
 * The order should be either by their time (ascending) or by their adition order.
 * @property {str} currentRider ID of the current rider who is going to compete now
 * @property {str} hotSeat ID of the best rider of the same category of the current rider
 * @property {Boolean} ongoingRace If any race is ongoing. This parameter is use to avoid change
 * the current rider if is riding
 */

/**
 * The state of the store's module related to the active tournament score board.
 *
 * @type {() => ScoreBoardStoreState}
 */
export default () => ({
  participants: {},
  participantsOrder: [],
  currentRider: null,
  hotSeat: null,
  ongoingRace: false,
});
