<template>
  <v-snackbar
    v-model="active"
    app
    :bottom="bottom"
    :color="color"
    content-class="pr-0"
    data-cy="app-notification"
    right
    :style="{ paddingBottom, paddingRight, paddingTop }"
    :timeout="timeout"
    :top="top"
    :transition="transition"
  >
    <div class="d-flex align-center justify-space-between">
      <div class="flex-grow-1">
        <v-icon v-if="icon">
          {{ icon }}
        </v-icon>
        <span class="px-4">{{ message }}</span>
      </div>
      <v-btn
        v-if="dismissible"
        data-cy="app-notification-close-button"
        icon
        @click="active = false"
      >
        <v-icon> mdi-close-circle </v-icon>
      </v-btn>
    </div>
  </v-snackbar>
</template>

<script>
import { computed, watch } from "@vue/composition-api";
import useStore from "~/compositions/useStore";

/**
 * Get the values from the store to use in the snackbar.
 *
 * @returns {Object} with:
 *   - `active`: A computed boolean value with a getter and setter to control
 *     the visiblity of the snackbar.
 *   - `bottom`: A computed boolean to put that indicates if the snackbar should be put in the bottom of the page or not.
 *     if `top` is true this poperty is not considered.
 *   - `color`: A computed string to control the color of the snackbar.
 *   - `dissmisible`: A computed boolean that indicates if the snackbar could be closed
 *     or not.
 *   - `icon`: A computed string with the icon to use in the snackbar.
 *   - `message`: A computed string with the message to show in the snackbar.
 *   - `paddingBottom`: A computed string with the padding to use from the bottom of the screen
 *     to posisionate the snackbar.
 *   - `paddingRight`: A computed string with the padding to use from the right of the screen
 *     to posisionate the snackbar.
 *   - `paddingTop`: A computed string with the padding to use from the top of the screen
 *     to posisionate the snackbar.
 *   - `timeout`: A computed number with the timeout to close the snackbar automatically.
 *   - `top` : A computed boolean that indicates if the snackbar should be put in top.
 *   - `transition`: A computed string with the transition to use to show the snackbar.
 */
function useStoreState() {
  const store = useStore("notifications");
  const active = computed({
    get: () => store.state.active,
    set: (active) => store.commit("setState", { active }),
  });
  const bottom = computed(() => store.state.bottom);
  const color = computed(() => store.state.color);
  const dismissible = computed(() => store.state.dismissible);
  const icon = computed(() => store.state.icon);
  const message = computed(() => store.state.message);
  const paddingBottom = computed(() => store.state.paddingBottom);
  const paddingRight = computed(() => store.state.paddingRight);
  const paddingTop = computed(() => store.state.paddingTop);
  const timeout = computed(() => store.state.timeout);
  const top = computed(() => store.state.top);
  const transition = computed(() => store.state.transition);

  // Use a timeout to wait for the animation
  watch(active, () => {
    if (!active.value) {
      setTimeout(() => store.commit("resetState"), 500);
    }
  });

  return {
    active,
    bottom,
    color,
    dismissible,
    icon,
    message,
    paddingBottom,
    paddingRight,
    paddingTop,
    timeout,
    transition,
    top,
  };
}

export default {
  setup() {
    return {
      ...useStoreState(),
    };
  },
};
</script>
