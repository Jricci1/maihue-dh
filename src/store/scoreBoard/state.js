/**
 * @typedef {Object} ScoreBoardStoreState The state of a the score board store
 * @property {Object {key: String: Object}} participants Object with the active tournamet participants
 * and their information. The object keys are the participant IDs and the values are the participants.
 * @property {Array} participantsOrder List of participant IDs sorted by their order on the scoreboard.
 * The order should be either by their time (ascending) or by their adition order.
 * @property {Object} newParticipant Object with the new participant that is going to be added to the board.
 * @property {String} newParticipant.name Name of the new participant.
 * @property {String} newParticipant.nickname Nickname of the new participant.
 * @property {String} newParticipant.lastName Last name of the new participant.
 * @property {Number} newParticipant.category Category of the new participant.
 * @property {Number} newParticipant.avatar Avatar of the new participant.
 */

/**
 * The state of the store's module related to the active tournament score board.
 *
 * @type {() => ScoreBoardStoreState}
 */
export default () => ({
  participants: {},
  participantsOrder: [],
  newParticipant: {
    name: null,
    nickname: null,
    lastName: null,
    category: null,
    avatar: null,
  },
});
