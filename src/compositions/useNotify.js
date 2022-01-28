import { useContext } from "@nuxtjs/composition-api";
import { computed } from "@vue/composition-api";
import useStore from "~/compositions/useStore";

/**
 * Get an object with functions to show a notification to the user.
 *
 * The `notify` object has multiple functions with predefined values but in any case
 * you could customize with the options objects.
 *
 * Example:
 *
 * ```javascript
 * import useNotify from '~/compositions/useNotify'
 *
 * export default {
 *   setup (props) {
 *     return {
 *       ...useNotify()
 *     }
 *   }
 * }
 * ```
 *
 * And in the template you could do:
 *
 * ```HTML
 * <template>
 *   <div>
 *     <v-btn @click="notify.info('An info message')">Notify info</v-btn>
 *     <v-btn @click="notify.error('An info message', { timeout: 10000 })">Notify error with custom timeout</v-btn>
 *   </div>
 * </template>
 * ```
 *
 * The power of the different functions is that it contains the custom icons and colors
 * for each one of the types. So you don't need to provide the color and icon for an info
 * message for example. It uses the template to get the corresponding color and it has
 * the icons for default.
 *
 * If you want, you can customize everything according to the properties available in the
 * notifications store module's state. See `~/store/notifications.js` to see the available
 * options, because the options provided in the functions are the ones that will be provided
 * to the `setState` mutation.
 *
 *
 * @returns {Object} with:
 *   - `notify`: An object with the following functions:
 *     - `custom` A function to show a notification with custom values.
 *     - `error`: A function to notify an error.
 *     - `info`: A function to notify an information.
 *     - `success`: A function to notify a success.
 *     - `warning`: A function to notify a warning message.
 */
export default function useNotify() {
  const store = useStore("notifications");
  const context = useContext();
  const theme = computed(() => context.$vuetify.theme.parsedTheme);

  const custom = (message, options = {}) =>
    store.commit("setState", { message, active: true, ...options });
  const error = (message, options = {}) =>
    custom(message, {
      icon: "mdi-alert-circle",
      color: theme.value.error.base,
      ...options,
    });
  const info = (message, options = {}) =>
    custom(message, {
      icon: "mdi-information",
      color: theme.value.info.base,
      ...options,
    });
  const success = (message, options = {}) =>
    custom(message, {
      icon: "mdi-check-circle",
      color: theme.value.success.base,
      ...options,
    });
  const warning = (message, options = {}) =>
    custom(message, {
      icon: "mdi-alert",
      color: theme.value.warning.base,
      ...options,
    });

  return {
    notify: {
      custom,
      error,
      info,
      success,
      warning,
    },
  };
}
