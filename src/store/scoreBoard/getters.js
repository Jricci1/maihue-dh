/**
 * A module of providers store with the getters to get computed data from the scoreBoard state.
 */

/**
 * Maps the participants into an arruy of ids sorted by their time attribute.
 *
 * @param {Object} state The actual state of the store.
 * @returns The array of participants ids sorted by time.
 */
const participantsOrder = (state) => {
  const participantsIds = Object.keys(state.participants);
  return participantsIds.sort(
    (p1, p2) =>
      (state.participants[p1].time ? state.participants[p1].time : "99:99:99") >
      (state.participants[p2].time ? state.participants[p2].time : "99:99:99")
  );
};

export default {
  participantsOrder,
};
