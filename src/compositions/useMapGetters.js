import { computed } from "@vue/composition-api";
import useStore from "./useStore";
/**
 * Gets the getter values from the given namespace store module.
 * The getters are mapped to computed properties.
 *
 * Example:
 *
 * ```javascript
 * import useMapGetters from '~/compositions/useMapGetters'
 *
 * export default {
 *   setup (props, context) {
 *     const { getterName } = useMapGetters('storeModuleName', ['getterName', 'otherGetterName1'])
 *     const { otherGetterName2 } = useMapGetters('storeModuleName', 'otherGetterName2')
 *
 *     return { getterName, 'otherGetterName1', 'otherGetterName2' }
 *   }
 * }
 * ```
 *
 * @param {String} namespace of the module of the store.
 * @param {String[]|String} getters the getters to map to properties.
 * See: https://composition-api.vuejs.org/api.html#setup
 *
 * @returns {Object} with:
 *   - `getters`: Computed properties with the state values of the getters.
 */
export default (namespace, getters = []) => {
  if (!Array.isArray(getters)) {
    getters = [getters];
  }

  const { getters: storeGetters } = useStore(namespace);
  const entries = getters.map((attribute) => [
    attribute,
    computed(() => storeGetters(attribute)),
  ]);

  return Object.fromEntries(entries);
};
