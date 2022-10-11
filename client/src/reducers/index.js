import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import statementsReducer from "./StatementsReducer";
import userReducer from "./UserReducer";

export const reducers = combineReducers({
  authReducer,
  statementsReducer,
  userReducer,
});
