import { combineReducers } from "redux";
import userReducer from "./userReducer";
import coachReducer from "./coachReducer";
import activityReducer from "./activityReducer";

const rootReducer = combineReducers({
  userReducer,
  coachReducer,
  activityReducer,
});

export default rootReducer;
