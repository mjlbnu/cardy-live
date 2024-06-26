import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import statementsReducer from "./StatementsReducer";
import userReducer from "./UserReducer";
import timerReducer from "./TimerReducer";
import lieReducer from "./LieReducer";
import rankingReducer from "./RankingReducer";

export const reducers = combineReducers({
  authReducer,
  statementsReducer,
  userReducer,
  timerReducer,
  lieReducer,
  rankingReducer,
});
