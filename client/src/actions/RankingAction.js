import * as RankingApi from "../api/RankingRequest";

export const savePlayerPoints = (data) => async (dispatch) => {
  dispatch({ type: "SAVE_R_START" });
  try {
    const savedPlayerPoints = await RankingApi.savePlayerPoints(data);
    dispatch({ type: "SAVE_R_SUCCESS", data: savedPlayerPoints.data })
  } catch (error) {
    dispatch({ type: "SAVE_R_ERROR" })
  }
}

export const getRanking = () => async (dispatch) => {
  dispatch({ type: "RETRIEVING_R_START" });
  try {
    const { data } = await RankingApi.getRanking();
    dispatch({ type: "RETRIEVING_R_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "RETRIEVING_R_ERROR" });
  }
};

export const getRankingAgr = () => async (dispatch) => {
  dispatch({ type: "RETRIEVING_RA_START" });
  try {
    const { data } = await RankingApi.getRankingAgr();
    dispatch({ type: "RETRIEVING_RA_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "RETRIEVING_RA_ERROR" });
  }
};

