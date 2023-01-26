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

export const saveUserInfo = (data) => async (dispatch) => {
  dispatch({ type: "SAVE_U_START " });
  try {
    const user = await UserApi.saveUser(data);
    dispatch({ type: "SAVE_U_SUCCESS", data: user.data });
  } catch (error) {
    dispatch({ type: "SAVE_U_FAIL" });
  }
};

export const getProfile = (data) => async (dispatch) => {
  dispatch({  type: "RETRIEVING_PROF_START"});
  try {
    const profile = await UserApi.getProfile(data);
    dispatch({ type: "RETRIEVING_PROF_SUCCESS", data: profile.data});
  } catch (error) {
    dispatch({ type: "RETRIEVING_PROF_ERROR"});
  }
}
