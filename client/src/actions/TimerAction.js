export const startTimer = (duration) => (dispatch) => {
  dispatch({ type: "START_TIMER", seconds: duration })
}