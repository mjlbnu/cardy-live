const statementsReducer = (
  state = { statements: [], error: false, sending: false },
  action
) => {
  switch (action.type) {
    case "UPLOAD_START":
      return { ...state, sending: true, error: false };
    case "UPLOAD_SUCCESS":
      return {
        statements: [action.data],
        sending: false,
        error: false,
      };
    case "UPLOAD_FAIL":
      return { ...state, sending: false, error: true };
    default:
      return state;
  }
};

export default statementsReducer;
