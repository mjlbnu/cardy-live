import * as StatementsApi from "../api/StatementsRequest";
import { useRef } from "react";

export const saveStatements = (data) => async (dispatch) => {
  dispatch({ type: "SAVE_START " });
  try {
    const savedStatements = await StatementsApi.saveStatements(data);
    dispatch({ type: "SAVE_SUCCESS", data: savedStatements.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "SAVE_FAIL" });
  }
};

export const uploadStatements = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const newStatements = await StatementsApi.uploadStatements(data);
    dispatch({ type: "UPLOAD_SUCCESS", data: newStatements.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};

export const getGamerStatements = (id, socket) => async (dispatch) => {
  dispatch({ type: "RETRIEVING_ST_START" });
  try {
    const statements = await StatementsApi.getGamerStatements(id);
    socket.current.emit("send-gamerStatements", statements);
    dispatch({ type: "RETRIEVING_ST_SUCCESS", data: statements.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETRIEVING_ST_ERROR" });
  }
};

export const setLie = (lie) => (dispatch) => {
  dispatch({ type: "SHOW_LIE", lie });
};
