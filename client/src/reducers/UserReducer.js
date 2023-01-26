const userReducer = (
  state = { users: [], loading: false, error: false },
  action
) => {
  switch (action.type) {
    case "RETRIEVING_START":
      return { ...state, loading: true, error: false };
    case "RETRIEVING_SUCCESS":
      return { ...state, users: action.data, loading: false, error: false };
    case "RETRIEVING_ERROR":
      return { ...state, loading: false, error: true };
    // belongs to profile
    case "RETRIEVING_PROF_START":
      return { ...state, state, loading: true, error: false };
    case "RETRIEVING_PROF_SUCCESS":
      return {
        ...state,
        profile: action.data,
        loading: false,
        error: false,
      };
    case "RETRIEVING_PROF_ERROR":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default userReducer;
