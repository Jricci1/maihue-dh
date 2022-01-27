import { computed } from "@vue/composition-api";
import useStore from "./useStore";
/**
 * Gets the fields from the given namespace store module.
 * The fields are mapped to computed properties.
 *
 * Example:
 *
 * ```javascript
 * import useMapState from '~/compositions/useMapState'
 *
 * export default {
 *   setup (props, context) {
 *     const { fieldName } = useMapState('storeModuleName', ['fieldName', 'otherFieldName1'])
 *     const { otherFieldName2 } = useMapState('storeModuleName', 'otherFieldName2')
 *
 *     return { fieldName, 'otherFieldName1', 'otherFieldName2' }
 *   }
 * }
 * ```
 *
 * @param {String} namespace of the module of the store.
 * @param {String[]|String} fields the fields to map from the state.
 * See: https://composition-api.vuejs.org/api.html#setup
 *
 * @returns {Object} with:
 *   - `fields`: Computed properties with the state values of the fields.
 */
export default (namespace, fields = []) => {
  if (!Array.isArray(fields)) {
    fields = [fields];
  }

  const { state } = useStore(namespace);
  const entries = fields.map((attribute) => [
    attribute,
    computed(() => state[attribute]),
  ]);

  return Object.fromEntries(entries);
};
