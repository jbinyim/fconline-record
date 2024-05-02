import { combineReducers } from "redux";
import fcReducer from "./fcReducer";
import fcBasicReducer from "./fcBasicReducer";
import fcMatchReducer from "./fcMatchReducer";

export default combineReducers({
  fc: fcReducer,
  fcBasic: fcBasicReducer,
  fcMatch: fcMatchReducer,
});
