import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { LessonReducer } from "./reducers/LessonReducer";
import { UserReducer } from "./reducers/UserReducer";

const rootReducers = combineReducers({
  LessonReducer,
  UserReducer,
});

export const store = createStore(rootReducers, applyMiddleware(thunk));
