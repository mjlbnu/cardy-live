export const setCountDown = (seconds) => (dispatch) => {
  dispatch({ type: "SET_COUNTDOWN", seconds });
};