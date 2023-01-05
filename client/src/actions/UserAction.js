import * as UserApi from "../api/UserRequest";

export const getUsers = () => async (dispatch) => {
  dispatch({ type: "RETRIEVING_START" });
  try {
    const { data } = await UserApi.getUsers();
    dispatch({ type: "RETRIEVING_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "RETRIEVING_ERROR" });
  }
};
