const rankingReducer = (
  state = { ranking: null, error: false, loading: false },
  action
) => {
  switch (action.type) {
    case "RETRIEVING_RA_START":
      return { ...state, state, loading: true, error: false };
    case "RETRIEVING_RA_SUCCESS":
      return {
        ...state,
        ranking: action.data,
        loading: false,
        error: false,
      };
    case "RETRIEVING_RA_ERROR":
      return { ...state, loading: false, error: true};
    default:
      return state;
  }
};

export default rankingReducer;