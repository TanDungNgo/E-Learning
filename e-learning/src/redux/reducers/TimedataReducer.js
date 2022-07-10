import { GET_ALL_TIMEDATA } from "../types/TimedataTypes";

const stateDefault = {
  timedatasDefault: [],
};

export const TimedataReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_ALL_TIMEDATA:
      state.timedatasDefault = action.value;
      return { ...state };

    default:
      return { ...state };
  }
};
