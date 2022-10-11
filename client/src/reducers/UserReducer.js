const userReducer = (
  state = { userData: null, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case "RETRIEVING_START":
      return { ...state, loading: true, error: false };
    case "RETRIEVING_SUCCESS":
      return { ...state, users: action.data, loading: false, error: false };
    case "RETRIEVING_ERROR":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default userReducer;
