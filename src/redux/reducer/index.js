import { combineReducers } from "redux";
import fcReducer from "./fcReducer";
import fcBasicReducer from "./fcBasicReducer";

export default combineReducers({ fc: fcReducer, fcBasic: fcBasicReducer });
