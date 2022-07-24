import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { LessonReducer } from "./reducers/LessonReducer";
import { UserReducer } from "./reducers/UserReducer";
import { CourseReducer } from "./reducers/CourseReducer";
import { RecordReducer } from "./reducers/RecordReducer";
import { TimedataReducer } from "./reducers/TimedataReducer";
import { NotifyReducer } from "./reducers/NotifyReducer";
import {UpgradeTeacherReducer} from "./reducers/UpgradeTeacherReducer";

const rootReducers = combineReducers({
  LessonReducer,
  UserReducer,
  CourseReducer,
  RecordReducer,
  TimedataReducer,
  NotifyReducer,
  UpgradeTeacherReducer
});

export const store = createStore(rootReducers, applyMiddleware(thunk));
