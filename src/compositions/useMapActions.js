import _ from "lodash";
import useStore from "./useStore";

/**
 * Get the actions of a namespaced store.
 *
 * Example:
 *
 * ```javascript
 * import mapActions from '~/compositions/useStoreActions.js
 *
 * export default {
 *   setup (props, context) {
 *     const { someAction, anotherAction } = mapActions("storeModuleName", ['someAction', 'anotherAction'])
 *
 *     return { store }
 *   }
 * }
 * ```
 *
 * @param {String} namespace of the module of the store.
 * @param {Array} actions the actions to retrieve. If not passed, all actions are retrieved.
 *
 * @returns {Object} with all the actions asked.
 */
export default (namespace, actions) => {
  const store = useStore(namespace);

  return _.zipObject(
    actions,
    actions.map((action) => _.partial(store.dispatch, action))
  );
};
