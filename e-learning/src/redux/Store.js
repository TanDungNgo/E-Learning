import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { LessonReducer } from "./reducers/LessonReducer";
import { UserReducer } from "./reducers/UserReducer";
import { CourseReducer } from "./reducers/CourseReducer";

const rootReducers = combineReducers({
  LessonReducer,
  UserReducer,
  CourseReducer,
});

export const store = createStore(rootReducers, applyMiddleware(thunk));
