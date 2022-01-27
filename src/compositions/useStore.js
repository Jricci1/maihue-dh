/**
 * Get the `state` object and the `commit` and `dispatch` functions for the
 * module with the given namespace from the store.
 *
 * Example:
 *
 * ```javascript
 * import useStore from '~/compositions/useStore.js
 *
 * export default {
 *   setup (props, context) {
 *     const store = useStore("storeModuleName", context)
 *
 *     return { store }
 *   }
 * }
 * ```
 *
 * @param {String} namespace of the module of the store.
 * @param {Object} context of the setup method of the component.
 * See: https://composition-api.vuejs.org/api.html#setup
 *
 * @returns {Object} with:
 *   - `state`: Object with the state of the module.
 *   - `commit`: Function to perform mutation in the module.
 *   - `dispatch`: Function to dispatch actions in the module.
 *   - `getters`: Object with the getters of the module.
 */
import { useStore } from "@nuxtjs/composition-api";
export default (namespace) => {
  const store = useStore();

  if (!Object.keys(store.state).includes(namespace)) {
    throw new Error(`${namespace} namespace doesn't exist`);
  }

  const state = store.state[namespace];
  const commit = (mutation, payload) =>
    store.commit(`${namespace}/${mutation}`, payload);
  const dispatch = (action, payload) =>
    store.dispatch(`${namespace}/${action}`, payload);
  const getters = (getter) => store.getters[`${namespace}/${getter}`];

  return { commit, dispatch, getters, state };
};
