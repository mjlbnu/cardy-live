import * as RankingApi from "../api/RankingRequest";

export const savePlayerPoints = (data) => async (dispatch) => {
  dispatch({ type: "SAVE_START" });
  try {
    const savedPlayerPoints = await RankingApi.savePlayerPoints(data);
    dispatch({ type: "SAVE_SUCCESS", data: savedPlayerPoints.data })
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETRIEVING_ERROR" })
  }
}

export const getRanking = () => async (dispatch) => {
  dispatch({ type: "RETRIEVING_START" });
  try {
    const { data } = await RankingApi.getRanking();
    dispatch({ type: "RETRIEVING_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "RETRIEVING_ERROR" });
  }
};
