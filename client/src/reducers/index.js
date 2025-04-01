import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import statementsReducer from "./StatementsReducer";
import userReducer from "./UserReducer";
import timerReducer from "./TimerReducer";
import lieReducer from "./LieReducer";
import rankingReducer from "./RankingReducer";
import countDownReducer from "./CountDownReducer";

export const reducers = combineReducers({
  authReducer,
  statementsReducer,
  userReducer,
  timerReducer,
  lieReducer,
  rankingReducer,
  countDownReducer,
});
