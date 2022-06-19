import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { LessonReducer } from "./reducers/LessonReducer";

const rootReducers = combineReducers({
  LessonReducer,
});

export const store = createStore(rootReducers, applyMiddleware(thunk));
