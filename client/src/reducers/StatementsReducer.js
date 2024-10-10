const statementsReducer = (
  state = { statements: null, error: false, loading: false },
  action
) => {
  switch (action.type) {
    case "RETRIEVING_ST_START":
      return { ...state, loading: true, error: false };
    case "RETRIEVING_ST_SUCCESS":
      return {
        ...state,
        statements: action.data,
        loading: false,
        error: false,
      };
    case "RETRIEVING_ST_ERROR":
      return { ...state, loading: false, error: true };
    case "RESET_STATEMENTS":
      return { ...state, statements: null, error: false, loading: false };
    default:
      return state;
  }
};

export default statementsReducer;
