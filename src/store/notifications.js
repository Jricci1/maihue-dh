/**
 * A module in the store to control the notifications states.
 */

// ///////////////////////////////////////////////
//                     STATE                    //
// ///////////////////////////////////////////////

export const state = () => ({
  active: false,
  bottom: true,
  color: null,
  dismissible: true,
  icon: null,
  message: null,
  paddingBottom: "0px",
  paddingRight: "0px",
  paddingTop: "0px",
  timeout: 5000,
  top: false,
  transition: "slide-x-reverse-transition",
});

// ///////////////////////////////////////////////////
//                     MUTATIONS                    //
// ///////////////////////////////////////////////////

/**
 * A simple mutation to update the state with a single function.
 *
 * You can provide only the properties that you want to change, is not
 * mandatory to provide all the properties of the state. It will only
 * replace the ones present in the `newState` object.
 *
 * @param {Object} state The actual state of the module.
 * @param {Object} newState With the properties to override.
 */
function setState(state, newState) {
  state.active = newState.active !== undefined ? newState.active : state.active;
  state.bottom =
    newState.message !== undefined ? newState.bottom : state.bottom;
  state.color = newState.color !== undefined ? newState.color : state.color;
  state.dismissible =
    newState.dismissible !== undefined
      ? newState.dismissible
      : state.dismissible;
  state.icon = newState.icon !== undefined ? newState.icon : state.icon;
  state.message =
    newState.message !== undefined ? newState.message : state.message;
  state.paddingBottom =
    newState.paddingBottom !== undefined
      ? newState.paddingBottom
      : state.paddingBottom;
  state.paddingRight =
    newState.paddingRight !== undefined
      ? newState.paddingRight
      : state.paddingRight;
  state.paddingTop =
    newState.paddingTop !== undefined ? newState.paddingTop : state.paddingTop;
  state.timeout =
    newState.timeout !== undefined ? newState.timeout : state.timeout;
  state.top = newState.message !== undefined ? newState.top : state.top;
  state.transition =
    newState.transition !== undefined ? newState.transition : state.transition;
}

/**
 * Reset the state to its original values.
 *
 * @param {Object} state The actual state of the module.
 */
function resetState(state) {
  state.active = false;
  state.bottom = true;
  state.color = null;
  state.dismissible = true;
  state.icon = null;
  state.message = null;
  state.paddingBottom = "0px";
  state.paddingRight = "0px";
  state.paddingTop = "0px";
  state.timeout = 3000;
  state.top = false;
  state.transition = "slide-x-reverse-transition";
}

// /////////////////////////////////////////////////
//                     EXPORTS                    //
// /////////////////////////////////////////////////

export const mutations = {
  setState,
  resetState,
};
