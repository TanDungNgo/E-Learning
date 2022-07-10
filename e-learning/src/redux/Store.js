import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { LessonReducer } from "./reducers/LessonReducer";
import { UserReducer } from "./reducers/UserReducer";
import { CourseReducer } from "./reducers/CourseReducer";
import { RecordReducer } from "./reducers/RecordReducer";
import { TimedataReducer } from "./reducers/TimedataReducer";

const rootReducers = combineReducers({
  LessonReducer,
  UserReducer,
  CourseReducer,
  RecordReducer,
  TimedataReducer,
});

export const store = createStore(rootReducers, applyMiddleware(thunk));
