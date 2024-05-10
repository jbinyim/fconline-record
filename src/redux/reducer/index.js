import { combineReducers } from "redux";
import fcReducer from "./fcReducer";
import fcBasicReducer from "./fcBasicReducer";
import fcMatchReducer from "./fcMatchReducer";
import fcMatchDetailReducer from "./fcMatchDetailReducer";

export default combineReducers({
  fc: fcReducer,
  fcBasic: fcBasicReducer,
  fcMatch: fcMatchReducer,
  fcMatchDetail: fcMatchDetailReducer,
});
