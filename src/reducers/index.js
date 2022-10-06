import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import statementsReducer from "./StatementsReducer";

export const reducers = combineReducers({ authReducer, statementsReducer });