import { GET_ALL_RECORDS } from "../types/RecordTypes";

const stateDefault = {
  recordsDefault: [],
};

export const RecordReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_ALL_RECORDS:
      state.recordsDefault = action.value;
      console.log("GET_ALL_RECORDS: ", action.value);
      return { ...state };

    default:
      return { ...state };
  }
};
